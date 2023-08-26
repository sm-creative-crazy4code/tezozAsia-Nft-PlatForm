//SPDX-License-Identifier :MIT

pragma solidity >=0.7.0<0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract MintNft is ERC721Enumerable, Ownable{
 using Strings for uint256;
 string baseURI;
 string public baseImage=".webp";
 string public baseExtension=".json";


 uint256 public cost= 0.001 ether;
 uint256 public maxsupply= 99;
 bool public paused = false;

 event Sale(
    uint256 id,
    address indexed buyer,
    uint256 cost,
    string indexed tokenURI,
    uint256 timestamp

 );


 struct SaleStruct{
    uint256 id;
    address buyer;
    uint256 cost;
    string imageURL;
    uint256 timestamp;


 }

 SaleStruct[ ] mintedNfts;

 constructor(
    string memory _name,
    string memory _symbol,
    string memory _initBaseURI
 )ERC721(_name,_symbol){

    setBaseURI(_initBaseURI);
 }


function payToMint( ) public payable{
 uint256 supply = totalSupply();
 require(!paused,"Sorry ,nft supply has been paused");
 require(supply<= maxsupply,"Sorry all nfts has been minted");
 require(msg.value>0 ether,"Sorry, you donot have sufficient ether for transaction");

  if(msg.sender != owner()){
    require(msg.value>=cost);

  }


  _safeMint(msg.sender,supply+1);

  mintedNfts.push(
    SaleStruct(
        supply+1,
        msg.sender,
        msg.value,
        toImage(supply+1),
        block.timestamp
    )
  );

  emit Sale(supply, msg.sender, msg.value, tokenURI(supply+1), block.timestamp);
}


function tokenURI(uint256 tokenId) public view virtual override returns(string memory){

    require(_exists(tokenId),"ERC721MetaData: URI query for non-existent token");

    string memory currentBaseURI= _baseURI();
    return bytes(currentBaseURI).length>0?string(abi.encodePacked(currentBaseURI,tokenId.toString(),baseExtension)):"";
}


function toImage(uint256 tokenId) internal view returns(string memory){
   string memory currentBaseURI= _baseURI();
   return bytes(currentBaseURI).length>0?string(abi.encodePacked(currentBaseURI,tokenId.toString(),baseImage)):"";
}



function getAllNfts() public view returns(SaleStruct [] memory){
    return mintedNfts;
}

function getAnNft(uint256 tokenId) public view returns(SaleStruct  memory){
    return mintedNfts[tokenId-1];
}


function payTo(address to,uint256 amount) public onlyOwner{
(bool success1,)= payable(to).call{value:amount}("");
require(success1);
}


 function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

function setPause(bool _state) public onlyOwner {
        paused = _state;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }


}
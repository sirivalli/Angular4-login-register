import { Injectable } from '@angular/core';

@Injectable()

export class UserServiceService {

  constructor() { }


 setUser(item, varName) { 
  localStorage.setItem(item, JSON.stringify(varName)) 
  } 
  
 getUser(varName) { 
  var arr = JSON.parse(localStorage.getItem(varName)); 
  if(arr == null) { 
  arr = new Array(); 
  } 
  return arr; 
  } 
removeUser(varName){
  localStorage.removeItem(varName);
}
}
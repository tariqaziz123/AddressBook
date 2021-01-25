import { Injectable } from '@angular/core';
import { Address } from './address';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private firestore:AngularFirestore) { }

  saveAddress(address:Address){
    console.log("From Service")
    console.log(address)
    this.firestore.collection("address").add({...address})
  }

  readAddress(){
    return this.firestore.collection("address").snapshotChanges()
  }

  updateAddress(address:Address){
    this.firestore.doc('address/' + address.id).update({...address})
  }
  deleteAddress(address:Address){
    this.firestore.doc('address/' + address.id).delete()
  }
}

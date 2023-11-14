import {db} from "../firebase-config";

import {
	// collection, 
	// getDocs, 
	// getDoc, 
	addDoc, 
	// updateDoc, 
	// DeleteDoc, 
	// doc
} from "firebase/firestore";


const InquiriesRef = collection(db, "inquiries")
class Inquiries {
	addInquiries = (newInq) => {
		return addDoc(InquiriesRef, newInq)
	}	
}
export default new Inquiries();
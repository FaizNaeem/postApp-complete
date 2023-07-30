import { app, db, auth, } from './firebase.mjs'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, query, where, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getDownloadURL , ref ,getStorage} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
const get_date = async()=>{
    const storage = getStorage();
    const querySnapshot = await getDocs(collection(db, "postapp"));
    querySnapshot.forEach((doc) => {
        
        console.log(doc.id, " => ", doc.data());
        // var url1
        getDownloadURL(ref(storage,doc.id))
        .then((url)=>{
             var url1 = url;
            
            //  console.log(url);
            let add_img =document.getElementById("main").innerHTML+=`
            <div class="card cn m-2"  style="width: 300px" >
            <img src="${url1}" class="card-img-top  custom-img" alt="...">
            <div class="card-body">
            <h5 class="card-title cart">${doc.data().text} <i class="fa-regular fa-heart"></i></h5>
            <p class="card-text cartd">${doc.data().textarea}</p>
            <h5 class="card-title cart">${doc.data().price} <i class="fa-solid fa-dollar-sign"></i></h5>
              <a href="./home.html" class="btn btn-primary bn">Add Post</a>
            </div>
          </div>
            `
        
            console.log(doc.data().price);
        })
        .catch((error) => {
            // Handle any errors
            console.log(error);
        });
    });
}
get_date()

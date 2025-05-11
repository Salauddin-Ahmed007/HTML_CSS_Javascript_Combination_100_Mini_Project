// মেনুয়্যালঃ ২টা বাটন ও ১টা কাউন্টার এর আইডিগুলো ধরা। 
// let count= 0; এটা লিখা।
//প্লাস বাটন ও মাইনাস বাটন.এ্যাড ইভেন লিসেনার সেট করে এ্যারো ফাংশন তৈরী, count=count+1, উপরের লাইন অর্থাৎ কাউন্টার এলিমেন্ট.innerText=count, কন্ডিশন এর if, else শর্তের মধ্যে প্লাস বাটন ও মাইনাস বাটনে .সেট এট্রিবিউট সেট করতে হবেে। এখানে মোট 7টা লাইন থাকবে।
//এবার কাউন্ট ইনক্রিজ ডিক্রিজ হবে এবং 0 পর্যন্ত ডিক্রিজ হওয়ার পরে বাটন হাইড হয়ে থাকবে। 
// কমপ্লিট করতে আর মাত্র 6টা কাজ বাকি- 
// ১। এ্যারো ফাংশন তৈরী। ২। ফাংশনের মধ্যে কাট পেষ্ট করা। ৩। মাইনাস এর পেষ্ট করা অংশ থেকে ইফ এর উপরের ২লাইন কেটে দেওয়া। 
// ফাংশন এর ফাস্ট ব্রাকেট এর মধ্যে একটা যেকোন নাম লিখব এবং তার নিচের লাইনেও +দেওয়ার পরে এই একই নাম লিখব। 
// এরপর এ্যাড ইভেন লিসেনার থেকে কাট করে নেওয়ার কারনে খালি হয়ে গেলো ঠিক সেই জায়গা ফাংশনের নাম কল করে তার মধ্যে +১ ও -১ দিলেই শেষ।

const counterElement= document.getElementById('Count');
const plusBtn= document.getElementById('PlusBtn');
const minusBtn= document.getElementById('MinusBtn');

let count= 0;

plusBtn.addEventListener('click', ()=> {
   updatCounter(+1)
})

minusBtn.addEventListener('click', ()=>{
   updatCounter(-1)
})

const updatCounter= (JeKonoNam)=>{
   count=count+JeKonoNam;
   counterElement.innerText= count;

   if (count>= 10) {
      plusBtn.setAttribute('disabled', true)
   }
   else{
      plusBtn.removeAttribute('disabled', false)
   }

   if (count<= 0) {
      minusBtn.setAttribute('disabled', true)
   }
   else{
      minusBtn.removeAttribute('disabled', false)
   }
};
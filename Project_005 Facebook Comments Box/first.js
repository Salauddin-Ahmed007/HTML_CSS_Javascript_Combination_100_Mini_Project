document.getElementById('Comments_btn').addEventListener('click', ()=>{
    const comment_box= document.getElementById('comment_box');
    const commentBoxValue= comment_box.value;
    const comment_place= document.getElementById('comment_place')
    const makePTag= document.createElement('p');
    comment_place.appendChild(makePTag);
    makePTag.innerText=commentBoxValue;
    comment_box.value= '';
    });

    







// ★ First of all: html, css of total work will finish. 

// দৃষ্টি আকর্শনঃ ঘটনার জন্য আলাদা ফাংশন বানিয়ে সম্পূর্ণ প্রজেক্ট কমপ্লিট করার পর যেটা সমস্যা হলোঃ কমেন্ট করলে ব্রাউজারে পূর্বের কমেন্ট মুছে গিয়ে তারপর নতুন কমেন্ট 
// আসে, অর্থাৎ পূর্বের কমেন্ট থাকে না। এই সমস্যা সমাধান করার জন্য ১নম্বর থেকে আলাদা ভাবে কাজ করা হলোঃ 


// ১। প্রথমেই বাটনের সাথে এ্যাড ইভেন লিসেনার তৈরী করা।
// ২। কমেন্ট বক্সে যে কমেন্ট লিখব সেটাকে নিয়ে অন্য কোথাও শো করতে হলে এর ভ্যালু টেনে বের করার কাজ করা। 
// ৩। ভ্যালু বের করার পর এটাকে দেখানোর কাজ। 
// ৪। কমেন্ট বক্সে পূর্বে টাইপ করা টেক্স যাতে থেকে না যায় সেই কাজ করা। 


// ১। এভাবে বাটনের আইডি ধরে এ্যাড ইভেন লিসেনার তৈরী করলামঃ document.getElementById('Comments_btn').addEventListener('click', ()=>{এর মধ্যেই সব কাজ করতে হবে, তো প্রথমে বাটনের আইডিটাকে ধরলাম}); আইডি ধরার পরের লাইনেই con.log করে কনসোলের ব্রাউজারে দেখতে হবে যে, কাজ করে কি না ? কাজ করার পর-
// ২। comment_box.value দিয়ে ভ্যোলু বের করলাম, এটাকে চেক করার জন্য con.log(এর মধ্যে দিয়ে ব্রাউজারের কনসোলে দেখলাম যে, বক্সের মধ্যে টাইপ করে বাটনে চাপ দিলে কনসোলে পাই কি না), (এখানে আমি বার বার ভুল করে comment_box.value এটাকে কনসোল লগের মধ্যে না দিয়েই বাটনে চাপ দিয়ে বসি)। এই ভ্যালু টেনে বের করে একটা ভেরিঃ মধ্যে রাখলাম।
// ৩। ভ্যাল্যুটা রাখার জন্য html এর মধ্যে আইডি সহ একটা div বানানো আছে। প্রথমে js থেকে আইডিটা ধরলাম, তারপর js থেকে html এর মধ্যে একটা p ট্যাগ বানানোর কাজ করা, এটাকে শো করার জন্য ডিভ এর এ্যাপেন্ট চাইল্ড বানানোর কাজ করা। তারপর ওই পি ট্যাগের মধ্যে দেখানোর জন্য makePTag.innerText= commentBoxValue; এভাবে ইন্নার টেক্স করে ভ্যালু দিয়ে দিলেই মেইন কাজ শেষ।
// ৪। ইমটি স্ট্রিং করে দিলেই সমস্যা সমাধান comment_box.value= '';


// মেশিনের নাম কি? 	 কাজ কি ?	          প্যারেন্ট মেশিনগুলার নাম কি ? 	উপর থেকে কি পাওয়ার জন্য অপেক্ষা করে ?           সম্পূর্ণ কোডটি সঠিক ভাবে টাইপ করো।





$(document).ready(function(){

    setInterval(function(){
        var $first = $(".slide ul li").first();
        $(".slide ul").stop().animate({"margin-left":"-100%"}, 1000, function(){
            $(".slide ul").append($first).css("margin-left", "0%");
        })
    }, 4000);



    // gallery-right
    gallery = [
        "h-img12.jpg","h-img13.jpg"
    ]

    for(i=0; i < gallery.length; i++){
        $("#gallery .wrap .right").append(`
            <div class="box" style="background-image: url(./img/${gallery[i]})"></div>
        `);
    }
    
    // gallery-bottom
    gallery = [
        "h3-bacground-img-4-1.jpg","h-img14.jpg", "h-img16.jpg"
    ]

    for(i=0; i < gallery.length; i++){
        $("#gallery .wrap .bottom").append(`
            <div class="box" style="background-image: url(./img/${gallery[i]})"></div>
        `);
    }
    
});

review_arr = [
    ["h-img3.jpg", "Ben Peterson", "Written by the Bride", "Logan is my oldest friend. He is charming, responsible, quirky, God-loving, and heartfelt all in one package. I was introduced to this awesome dude for the first time ever on an impromptu trip to the local…"],
]

var reviewcase = "";

var reviewbox = document.querySelector("#review .wrap .content .top")

review_arr.forEach(function(v,i){
    reviewcase += `
        <div class="img" style="background-image:url(./img/${v[0]})"></div>
        <div class="txt_part">
            <h2 class="gv_font">${v[1]}</h2>
            <span></span>
            <div class="subtitle js_font">${v[2]}</div>
            <p>${v[3]}</p>
        </div>
    `;
});

reviewbox.innerHTML = reviewcase;


reviews = [
    ["Jen Wallace", "Written by the Groom", "Though she is the sweetest person on Earth, sometimes she can be intimidating as well. Or that was just me thinking of doing a proposal and horrified at the thought that she might refuse it..", "h-img4.jpg"]
]

var reviewCase = "";

var reviewboxs = document.querySelector("#review .wrap .content .bottom")

reviews.forEach(function(v,i){
    reviewCase += `
        <div class="txt_part">
            <h2 class="gv_font">${v[0]}</h2>
            <span></span>
            <div class="subtitle js_font">${v[1]}</div>
            <p>${v[2]}</p>
        </div>
        <div class="img" style="background-image:url(./img/${v[3]})"></div>
    `;
});

reviewboxs.innerHTML = reviewCase;

// blog
blog_arr = [
    ["h-img32.jpg", "The Proposal", "July 13, 2020", "Coming up with a unique proposal idea was challenging, indeed. After months of<br>delays…"],
    ["h-img33.jpg", "Quick Note About the Gifts", "July 12, 2020", "But we are asking in love and sincerity that you choose to<br>bless us only…"],
    ["h-img34.jpg", "Tips for Out-of-Towners", "July 07, 2020", "Talking about those of our<br>guests who will come from<br> afar, fly into the San Diego International Airport…"],
]

blogCase = "";
var blogboxs = document.querySelector("#blog .wrap .right")

blog_arr.forEach(function(v,i){
    blogCase +=`
    <div class="box" style="background-image: url(./img/${v[0]})">
        <div class="inbox">
            <div class="txt_part">
                <h1 class="gv_font">${v[1]}</h1>
                <div class="date">${v[2]}</div>
                <span></span>
                <p>${v[3]}</p>
            </div>
        </div>
    </div>
    `;
});

blogboxs.innerHTML = blogCase;
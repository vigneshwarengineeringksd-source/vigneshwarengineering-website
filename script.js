/* ===========================
   VIGNESHWAR ENGINEERING INDUSTRIAL
   Modern Business Website
=========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    background:#f5f7fa;
    color:#222;
}

/* Container */

.container{
    width:90%;
    max-width:1300px;
    margin:auto;
}

/* ================= HEADER ================= */

header{
    position:fixed;
    width:100%;
    top:0;
    left:0;
    z-index:1000;
    background:rgba(11,58,110,.95);
    backdrop-filter:blur(10px);
    box-shadow:0 5px 20px rgba(0,0,0,.15);
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:85px;
}

.logo{
    display:flex;
    align-items:center;
    gap:15px;
}

.logo img{
    width:60px;
    height:60px;
    border-radius:50%;
    background:#fff;
    padding:4px;
}

.logo h2{
    color:#fff;
    font-size:24px;
    font-weight:700;
}

#navMenu{
    display:flex;
    list-style:none;
    gap:35px;
}

#navMenu a{
    color:#fff;
    text-decoration:none;
    font-weight:500;
    transition:.3s;
}

#navMenu a:hover{
    color:#ff9800;
}

.menu-btn{
    display:none;
    color:white;
    font-size:28px;
    cursor:pointer;
}

/* ================= HERO ================= */

.hero{
    min-height:100vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:60px;
    padding:130px 8%;
    background:linear-gradient(135deg,#0B3A6E,#15579b);
}

.hero-content{
    flex:1;
}

.hero-content h1{
    color:white;
    font-size:54px;
    line-height:1.2;
    margin-bottom:25px;
}

.hero-content p{
    color:#dfe8f2;
    font-size:20px;
    line-height:1.8;
    margin-bottom:35px;
}

.hero-buttons{
    display:flex;
    gap:20px;
}

.btn{
    display:inline-block;
    padding:15px 35px;
    border-radius:8px;
    text-decoration:none;
    font-weight:600;
    transition:.3s;
}

.btn:first-child{
    background:#ff9800;
    color:white;
}

.whatsapp-btn{
    background:#25D366;
    color:white;
}

.btn:hover{
    transform:translateY(-4px);
}

.hero-image{
    flex:1;
    text-align:center;
}

.hero-image img{
    width:100%;
    max-width:650px;
    border-radius:20px;
    box-shadow:0 25px 60px rgba(0,0,0,.30);
}

/* ================= MOBILE ================= */

@media(max-width:900px){

nav{
    height:80px;
}

.logo h2{
    font-size:18px;
}

.logo img{
    width:50px;
    height:50px;
}

.menu-btn{
    display:block;
}

#navMenu{
    position:absolute;
    top:85px;
    left:0;
    width:100%;
    background:#0B3A6E;
    flex-direction:column;
    text-align:center;
    display:none;
    padding:20px 0;
}

#navMenu.active{
    display:flex;
}

.hero{
    flex-direction:column;
    text-align:center;
    padding-top:120px;
}

.hero-content h1{
    font-size:36px;
}

.hero-content p{
    font-size:17px;
}

.hero-buttons{
    justify-content:center;
    flex-wrap:wrap;
}

}

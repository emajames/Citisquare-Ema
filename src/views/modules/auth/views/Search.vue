<template>
    <section>
        <div class="search">
            <h1>Real Estate</h1>
            <div class="search1">
                <img src="@/assets/ck.svg" alt="" />
            </div>
            <div class="search2">
                <div class="search21">
                    <h2>Dakadda Estate</h2>
                    <p>Airport Road, Uyo, Akwa Ibom State.</p>
                </div>
                <div class="search22">
                    <div class="search221">
                        <img src="@/assets/pse.svg" alt="">
                        
                    </div>
                    <div class="search222">
                        <p>Dakadda Initiative</p>
                        <img src="@/assets/ce.svg" alt="">

                    </div>
                </div>
            </div>
            <div class="search3">
                <img src="@/assets/house.svg" alt="">
            </div>
            <div class="search4">
                <img src="@/assets/ab.svg" alt=""> <img src="@/assets/bc.svg" alt=""> <img src="@/assets/cd.svg" alt="">
                <img src="@/assets/de.svg" alt=""> <img src="@/assets/ef.svg" alt=""> <img src="@/assets/fg.svg" alt="">
            </div>
            <div class="search5">
                <div class="search51">
                    <h3>Overview</h3>
                    <div class="search511">
                        <div class="search512">
                            <img src="@/assets/dfg.svg" alt="">
                        </div>
                        <div class="search513">
                            <h3>Get pre-qualified for a loan</h3>
                            <p>Reach out to financial service provider to get you pre qualified for a loan, this saves you much time as you need not wait to get verified 
                            before taking a loan</p>
                            <span>Get Started</span>
                        </div>
                    </div>
                    <div class="search52">
                        <p>Dakadda Estate is located in Ikeja GRA, in a classy, green and Serene environs with gated security. We provide a lasting experience by making you comfortable throughout your stay. We make your stay interesting with various entertainment options through Netflix, Fibre Internet and Premium Dstv Sub. Your comfort is our priority.</p>
                        <span>Address</span>
                        <p>Plot P/14 Public Building Layout, Lekki Phase1, Lagos, Nigeria</p>
                        <span>Facts and Features</span>
                        <div class="search521">
                            <p><img src="@/assets/images/vec.svg" alt="" srcset=""> Internet</p>
                            <p><img src="@/assets/images/tor.svg" alt="" srcset=""> Restaurant</p>
                            <p><img src="@/assets/images/ect.svg" alt="" srcset=""> Parking Service</p>
                            <p><img src="@/assets/images/gym.svg" alt="" srcset=""> Gym</p>
                            <p><img src="@/assets/images/tail.svg" alt="" srcset=""> Bar</p>
                            <p><img src="@/assets/images/Group.svg" alt="" srcset=""> Swimming Pool</p>
                        </div>
                    </div>
                    <div class="search53">
                    <p>Purchase Price</p>
                    <p class="fee">N605,000</p>
                    <p>Service Fee</p>
                    <p class="fee">N2,500</p>
                    <p>Total</p>
                    <p class="fee">N607,500</p>
                </div>
                </div>
                <div class="search54">
                    <h3>NGN 50,000,000</h3>
                    <p>per property purchase</p>
                    <button class="invest">Invest</button>
                    <button class="request">Request Tour</button>
                    <img src="@/assets/images/map.svg" alt="">
                </div>
                
            </div>
            <div class="search55">
                <div class="search551">
                    <h3>Merchant Company Information</h3>
                    <div class="search5512">
                        <img src="@/assets/images/72.svg" alt="">
                        <p>Best Western Plus Dover Marina Hotel & Spa </p>
                    </div>
                    <div class="search5513">
                        <p>Joined</p> <p>March 2018</p>
                        <p>Bookings</p>  <p>200</p>
                    </div>
                    <div class="search5514">
                        <button>Contact Merchant</button>
                        <p>*Please make sure not to make payments to properties hosts outside the platform</p>
                    </div>
                </div>
                <div class="search552">
                    <h3>View Merchant Company on Map</h3>
                    <img src="@/assets/images/map2.svg" alt="">
                </div>
            </div>
        </div>
        
    </section>
</template>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .search{
        margin-left: 5rem;
        margin-right: 5rem;
        margin-top: 2rem;
    }
    .search h1{
        color: #08293A;
        font-weight: 700;
        margin-bottom: 2rem;
        font-size: 30px;
    }
    .search1 img{
        margin-bottom: 2rem;
    }
    .search2{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .search21 h2{
        color: #08293A;
        font-weight: 600;
        font-size: 38px;
    }
    .search21 p{
        color: #6C6C6C;
        font-size: 20px;
        font-weight: 400;
    }
    .search22{
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: right;
        column-gap: 1rem;
    }
    .search222{
        text-align: left;
        margin-top: 0.5rem;
    }
    .search3 img{
        width: 100%;
        margin-top: 1rem;
    }
    .search4{
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        column-gap: 1rem;
    }
    .search4 img{
        width: 100%;
    }
    .search5{
        display: grid;
        grid-template-columns: 3fr 2fr ;
        column-gap: 2rem;
        margin-top: 2rem;
    }
    .search51 h3{
        color: #005B8A;
        font-size: 20px;
        font-weight: 600;
    }
    .search511{
        margin-top: 1rem;
        background: #E3F0F8;
        display: grid;
        grid-template-columns: 1fr 10fr;
        padding: 1rem;
    } 
    .search512 img{
        width: 3rem;
    }
    .search513 p{
        color: #25363F;
    }
    .search513 span{
        color: #1686C1;
        font-size: 16px;
        margin-top: 0.5rem;
        text-decoration: underline;
    }
    .search52{
        margin-top: 1rem;
    }
    .search52 p{
        color: #08293A;
    }
    .search52 span{
        color: #08293A;
        font-weight: 700;
        padding-top: 3rem;
        font-size: 20px;
        display: block;
    }
    .search521{
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 1rem;
    }
    .search521 img{
        margin-right: 1rem;
    }
    .search53{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 2rem;
    }
    .fee{
        font-weight: 700;
    }
    .search54{
        text-align: right;
    }
    .search54 h3{
        color: #005B8A;
        font-size: 30px;
        font-weight: 700;
    }
    .search54 p{
        color: #6B7D86;
        font-size: 12px;
    }
    .invest{
        width: 100%;
        background: #2594D9;
        border: 1px solid #2594D9;
        border-radius: 2px;
        margin-top: 1rem;
        display: block;
        color: white;
        padding: 0.7rem;
    }
    .request{
        border: 1px solid #2594D9;
        color: #2594D9;
        margin-top: 1rem;
        padding: 0.7rem;
        border-radius: 2px;
        display: block;
        width: 100%;
        background: white;
    }
    .search54 img{
        width: 100%;
        margin-top: 1rem;
        
    }
    .search55{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1.5rem;
    }
    .search551 h3{
        font-size: 25px;
        font-weight: 600;
        color: #08293A;
    }
    .search5512{
        display: grid;
        grid-template-columns: 1fr 9fr;
        margin-top: 1rem;
    }
    .search5512 p{
        font-size: 20px;
        font-weight: 700;
        color: #08293A
    }
    .search5513{
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 1rem;
    }
    .search5513 p{
        color: #08293A;
        font-weight: 600;
    }
    .search5514{
        margin-top: 1rem;
    }
    .search5514 button{
        background: #08293A;
        border-radius: 2px;
        color: white;
        width: 100%;
        padding: 0.7rem;
    }
    .search5514 p{
        color: #08293A;
        font-size: 15px;
        margin-top: 1rem;
        font-weight: 700;
    }
    .search552 img{
        width: 100%;
    }
    .search552 h3{
        font-size: 25px;
        font-weight: 600;
        color: #08293A;
        margin-bottom: 1rem;
    }






    @media(max-width:576px){
        .search{
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 2rem;
    }
        .search2{
        display: grid;
        grid-template-columns: 1fr;
    }
        .search22{
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: left;
        column-gap: 0rem;
        margin-top: 0.5rem;
    }
        .search4{
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 0.5rem;
        row-gap: 0.5rem;
    }
        .search5{
        display: grid;
        grid-template-columns: 1fr ;
        column-gap: 2rem;
        margin-top: 2rem;
    }
        .search511{
        margin-top: 1rem;
        background: #E3F0F8;
        display: grid;
        grid-template-columns: 1fr 8fr;
        padding: 1rem;
    } 
        .search54{
        text-align: center;
        margin-top: 2rem;

    }
        .search55{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 1.5rem;
    }
        .search5512{
        display: grid;
        grid-template-columns: 1fr 4fr;
        margin-top: 1rem;
    }
        .search552{
            margin-top: 2rem;
        }
    }


    @media(min-width: 577px) and (max-width:768px){
        .search{
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 2rem;
    }
    }
</style>
import {useState, useEffect} from 'react'

const NavigationBar = () => {
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        }
        console.log('phew')
        window.addEventListener("resize", handleResize)
    }, [])

    return(
        <>
            {size>768?
            <>
                <div className="container">
                    <div className={'row'}>
                        <div className={'col-2'}>
                            <svg width="119" height="56" viewBox="0 0 119 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.57812 44V9.875H13.5703C16.5859 9.875 19.2969 10.5625 21.7031 11.9375C24.1094 13.2969 25.9844 15.2266 27.3281 17.7266C28.6875 20.2109 29.375 23 29.3906 26.0938V27.6641C29.3906 30.7891 28.7266 33.5938 27.3984 36.0781C26.0859 38.5469 24.2266 40.4844 21.8203 41.8906C19.4297 43.2812 16.7578 43.9844 13.8047 44H2.57812ZM10.8047 16.2266V37.6719H13.6641C16.0234 37.6719 17.8359 36.8359 19.1016 35.1641C20.3672 33.4766 21 30.9766 21 27.6641V26.1875C21 22.8906 20.3672 20.4062 19.1016 18.7344C17.8359 17.0625 15.9922 16.2266 13.5703 16.2266H10.8047Z" fill="#85171A"/>
                                <path d="M48.8109 34.9297C48.8109 33.7266 48.3813 32.7891 47.5219 32.1172C46.6781 31.4453 45.1859 30.75 43.0453 30.0312C40.9047 29.3125 39.1547 28.6172 37.7953 27.9453C33.3734 25.7734 31.1625 22.7891 31.1625 18.9922C31.1625 17.1016 31.7094 15.4375 32.8031 14C33.9125 12.5469 35.475 11.4219 37.4906 10.625C39.5063 9.8125 41.7719 9.40625 44.2875 9.40625C46.7406 9.40625 48.9359 9.84375 50.8734 10.7188C52.8266 11.5937 54.3422 12.8438 55.4203 14.4688C56.4984 16.0781 57.0375 17.9219 57.0375 20H48.8344C48.8344 18.6094 48.4047 17.5312 47.5453 16.7656C46.7016 16 45.5531 15.6172 44.1 15.6172C42.6313 15.6172 41.4672 15.9453 40.6078 16.6016C39.7641 17.2422 39.3422 18.0625 39.3422 19.0625C39.3422 19.9375 39.8109 20.7344 40.7484 21.4531C41.6859 22.1562 43.3344 22.8906 45.6938 23.6562C48.0531 24.4062 49.9906 25.2188 51.5063 26.0938C55.1938 28.2188 57.0375 31.1484 57.0375 34.8828C57.0375 37.8672 55.9125 40.2109 53.6625 41.9141C51.4125 43.6172 48.3266 44.4688 44.4047 44.4688C41.6391 44.4688 39.1313 43.9766 36.8813 42.9922C34.6469 41.9922 32.9594 40.6328 31.8188 38.9141C30.6938 37.1797 30.1313 35.1875 30.1313 32.9375H38.3813C38.3813 34.7656 38.85 36.1172 39.7875 36.9922C40.7406 37.8516 42.2797 38.2812 44.4047 38.2812C45.7641 38.2812 46.8344 37.9922 47.6156 37.4141C48.4125 36.8203 48.8109 35.9922 48.8109 34.9297Z" fill="#DC2025"/>
                                <path d="M67.6219 44H59.4188V9.875H67.6219V44Z" fill="#FEBA08"/>
                                <path d="M71.7227 18V10.8906H73.8223C74.4505 10.8906 75.0072 11.0306 75.4922 11.3105C75.9805 11.5905 76.3581 11.9876 76.625 12.502C76.8919 13.0163 77.0254 13.6055 77.0254 14.2695V14.626C77.0254 15.2998 76.8903 15.8923 76.6201 16.4033C76.3532 16.9144 75.9707 17.3083 75.4727 17.585C74.9779 17.8617 74.4098 18 73.7686 18H71.7227ZM72.958 11.8867V17.0137H73.7637C74.4115 17.0137 74.9079 16.8118 75.2529 16.4082C75.6012 16.0013 75.7786 15.4186 75.7852 14.6602V14.2646C75.7852 13.4932 75.6175 12.904 75.2822 12.4971C74.9469 12.0902 74.4603 11.8867 73.8223 11.8867H72.958ZM84.482 16.2422L85.5758 10.8906H86.8014L85.1607 18H83.9791L82.6266 12.8096L81.2447 18H80.0582L78.4176 10.8906H79.6432L80.7467 16.2324L82.1041 10.8906H83.1393L84.482 16.2422ZM89.6584 18H88.4279V10.8906H89.6584V18ZM91.827 18V10.8906H93.9266C94.5548 10.8906 95.1115 11.0306 95.5965 11.3105C96.0848 11.5905 96.4624 11.9876 96.7293 12.502C96.9962 13.0163 97.1297 13.6055 97.1297 14.2695V14.626C97.1297 15.2998 96.9946 15.8923 96.7244 16.4033C96.4575 16.9144 96.075 17.3083 95.577 17.585C95.0822 17.8617 94.5141 18 93.8729 18H91.827ZM93.0623 11.8867V17.0137H93.868C94.5158 17.0137 95.0122 16.8118 95.3572 16.4082C95.7055 16.0013 95.8829 15.4186 95.8895 14.6602V14.2646C95.8895 13.4932 95.7218 12.904 95.3865 12.4971C95.0512 12.0902 94.5646 11.8867 93.9266 11.8867H93.0623ZM102.882 16.3447H100.128L99.5521 18H98.268L100.954 10.8906H102.062L104.752 18H103.463L102.882 16.3447ZM100.475 15.3486H102.536L101.505 12.3994L100.475 15.3486ZM109.929 16.1689C109.929 15.8564 109.818 15.6156 109.597 15.4463C109.379 15.277 108.983 15.1061 108.41 14.9336C107.837 14.7611 107.382 14.569 107.043 14.3574C106.395 13.9505 106.071 13.4199 106.071 12.7656C106.071 12.1927 106.304 11.7207 106.77 11.3496C107.238 10.9785 107.845 10.793 108.591 10.793C109.086 10.793 109.527 10.8841 109.914 11.0664C110.301 11.2487 110.606 11.5091 110.827 11.8477C111.049 12.1829 111.159 12.5557 111.159 12.9658H109.929C109.929 12.5947 109.812 12.305 109.577 12.0967C109.346 11.8851 109.014 11.7793 108.581 11.7793C108.177 11.7793 107.863 11.8656 107.639 12.0381C107.417 12.2106 107.307 12.4515 107.307 12.7607C107.307 13.0212 107.427 13.2393 107.668 13.415C107.909 13.5876 108.306 13.7568 108.859 13.9229C109.413 14.0856 109.857 14.2728 110.192 14.4844C110.528 14.6927 110.773 14.9336 110.93 15.207C111.086 15.4772 111.164 15.7946 111.164 16.1592C111.164 16.7516 110.936 17.2236 110.48 17.5752C110.028 17.9235 109.413 18.0977 108.635 18.0977C108.12 18.0977 107.647 18.0033 107.214 17.8145C106.784 17.6224 106.449 17.3587 106.208 17.0234C105.97 16.6882 105.852 16.2975 105.852 15.8516H107.087C107.087 16.2552 107.22 16.5677 107.487 16.7891C107.754 17.0104 108.137 17.1211 108.635 17.1211C109.064 17.1211 109.387 17.0348 109.602 16.8623C109.82 16.6865 109.929 16.4554 109.929 16.1689ZM116.878 16.3447H114.124L113.547 18H112.263L114.949 10.8906H116.057L118.748 18H117.459L116.878 16.3447ZM114.47 15.3486H116.531L115.501 12.3994L114.47 15.3486Z" fill="black" fill-opacity="0.6"/>
                                <path d="M75.4385 28.1689C75.4385 27.8564 75.3278 27.6156 75.1064 27.4463C74.8883 27.277 74.4928 27.1061 73.9199 26.9336C73.347 26.7611 72.8913 26.569 72.5527 26.3574C71.9049 25.9505 71.5811 25.4199 71.5811 24.7656C71.5811 24.1927 71.8138 23.7207 72.2793 23.3496C72.748 22.9785 73.3551 22.793 74.1006 22.793C74.5954 22.793 75.0365 22.8841 75.4238 23.0664C75.8112 23.2487 76.1156 23.5091 76.3369 23.8477C76.5583 24.1829 76.6689 24.5557 76.6689 24.9658H75.4385C75.4385 24.5947 75.3213 24.305 75.0869 24.0967C74.8558 23.8851 74.5238 23.7793 74.0908 23.7793C73.6872 23.7793 73.373 23.8656 73.1484 24.0381C72.9271 24.2106 72.8164 24.4515 72.8164 24.7607C72.8164 25.0212 72.9368 25.2393 73.1777 25.415C73.4186 25.5876 73.8158 25.7568 74.3691 25.9229C74.9225 26.0856 75.3669 26.2728 75.7021 26.4844C76.0374 26.6927 76.2832 26.9336 76.4395 27.207C76.5957 27.4772 76.6738 27.7946 76.6738 28.1592C76.6738 28.7516 76.446 29.2236 75.9902 29.5752C75.5378 29.9235 74.9225 30.0977 74.1445 30.0977C73.6302 30.0977 73.1566 30.0033 72.7236 29.8145C72.2939 29.6224 71.9587 29.3587 71.7178 29.0234C71.4801 28.6882 71.3613 28.2975 71.3613 27.8516H72.5967C72.5967 28.2552 72.7301 28.5677 72.9971 28.7891C73.264 29.0104 73.6465 29.1211 74.1445 29.1211C74.5742 29.1211 74.8965 29.0348 75.1113 28.8623C75.3294 28.6865 75.4385 28.4554 75.4385 28.1689ZM81.8873 28.3447H79.1334L78.5572 30H77.273L79.9586 22.8906H81.067L83.7574 30H82.4684L81.8873 28.3447ZM79.4801 27.3486H81.5406L80.5104 24.3994L79.4801 27.3486ZM86.3195 22.8906L88.3703 28.3398L90.4162 22.8906H92.0129V30H90.7824V27.6562L90.9045 24.5215L88.8049 30H87.9211L85.8264 24.5264L85.9484 27.6562V30H84.718V22.8906H86.3195ZM97.3436 28.1689C97.3436 27.8564 97.2329 27.6156 97.0115 27.4463C96.7934 27.277 96.3979 27.1061 95.825 26.9336C95.2521 26.7611 94.7964 26.569 94.4578 26.3574C93.81 25.9505 93.4861 25.4199 93.4861 24.7656C93.4861 24.1927 93.7189 23.7207 94.1844 23.3496C94.6531 22.9785 95.2602 22.793 96.0057 22.793C96.5005 22.793 96.9415 22.8841 97.3289 23.0664C97.7163 23.2487 98.0206 23.5091 98.242 23.8477C98.4633 24.1829 98.574 24.5557 98.574 24.9658H97.3436C97.3436 24.5947 97.2264 24.305 96.992 24.0967C96.7609 23.8851 96.4288 23.7793 95.9959 23.7793C95.5923 23.7793 95.2781 23.8656 95.0535 24.0381C94.8322 24.2106 94.7215 24.4515 94.7215 24.7607C94.7215 25.0212 94.8419 25.2393 95.0828 25.415C95.3237 25.5876 95.7208 25.7568 96.2742 25.9229C96.8276 26.0856 97.2719 26.2728 97.6072 26.4844C97.9425 26.6927 98.1883 26.9336 98.3445 27.207C98.5008 27.4772 98.5789 27.7946 98.5789 28.1592C98.5789 28.7516 98.351 29.2236 97.8953 29.5752C97.4428 29.9235 96.8276 30.0977 96.0496 30.0977C95.5353 30.0977 95.0617 30.0033 94.6287 29.8145C94.199 29.6224 93.8637 29.3587 93.6229 29.0234C93.3852 28.6882 93.2664 28.2975 93.2664 27.8516H94.5018C94.5018 28.2552 94.6352 28.5677 94.9021 28.7891C95.1691 29.0104 95.5516 29.1211 96.0496 29.1211C96.4793 29.1211 96.8016 29.0348 97.0164 28.8623C97.2345 28.6865 97.3436 28.4554 97.3436 28.1689ZM103.792 28.3447H101.038L100.462 30H99.1781L101.864 22.8906H102.972L105.663 30H104.373L103.792 28.3447ZM101.385 27.3486H103.446L102.415 24.3994L101.385 27.3486ZM109.235 27.2607H107.858V30H106.623V22.8906H109.123C109.943 22.8906 110.576 23.0745 111.022 23.4424C111.468 23.8102 111.691 24.3424 111.691 25.0391C111.691 25.5143 111.576 25.9131 111.345 26.2354C111.117 26.5544 110.798 26.8001 110.388 26.9727L111.984 29.9365V30H110.661L109.235 27.2607ZM107.858 26.2695H109.128C109.545 26.2695 109.87 26.1654 110.104 25.957C110.339 25.7454 110.456 25.4574 110.456 25.0928C110.456 24.7119 110.347 24.4173 110.129 24.209C109.914 24.0007 109.592 23.8932 109.162 23.8867H107.858V26.2695ZM116.993 28.3447H114.239L113.663 30H112.379L115.064 22.8906H116.172L118.863 30H117.574L116.993 28.3447ZM114.586 27.3486H116.646L115.616 24.3994L114.586 27.3486Z" fill="#263238" fill-opacity="0.8"/>
                                <path d="M73.0264 43H71.7959V35.8906H73.0264V43ZM79.6846 43H78.4492L75.2803 37.9561V43H74.0449V35.8906H75.2803L78.459 40.9541V35.8906H79.6846V43ZM80.6445 43V35.8906H82.7441C83.3724 35.8906 83.929 36.0306 84.4141 36.3105C84.9023 36.5905 85.2799 36.9876 85.5469 37.502C85.8138 38.0163 85.9473 38.6055 85.9473 39.2695V39.626C85.9473 40.2998 85.8122 40.8923 85.542 41.4033C85.2751 41.9144 84.8926 42.3083 84.3945 42.585C83.8997 42.8617 83.3317 43 82.6904 43H80.6445ZM81.8799 36.8867V42.0137H82.6855C83.3333 42.0137 83.8298 41.8118 84.1748 41.4082C84.5231 41.0013 84.7005 40.4186 84.707 39.6602V39.2646C84.707 38.4932 84.5394 37.904 84.2041 37.4971C83.8688 37.0902 83.3822 36.8867 82.7441 36.8867H81.8799ZM92.3516 39.6309C92.3516 40.3275 92.2311 40.9395 91.9902 41.4668C91.7493 41.9909 91.4043 42.3945 90.9551 42.6777C90.5091 42.9577 89.9948 43.0977 89.4121 43.0977C88.8359 43.0977 88.3216 42.9577 87.8691 42.6777C87.4199 42.3945 87.0716 41.9925 86.8242 41.4717C86.5801 40.9508 86.4564 40.3503 86.4531 39.6699V39.2695C86.4531 38.5762 86.5752 37.9642 86.8193 37.4336C87.0667 36.903 87.4134 36.4977 87.8594 36.2178C88.3086 35.9346 88.8229 35.793 89.4023 35.793C89.9818 35.793 90.4945 35.9329 90.9404 36.2129C91.3896 36.4896 91.7363 36.89 91.9805 37.4141C92.2246 37.9349 92.3483 38.542 92.3516 39.2354V39.6309ZM91.1162 39.2598C91.1162 38.472 90.9665 37.8682 90.667 37.4482C90.3708 37.0283 89.9492 36.8184 89.4023 36.8184C88.8685 36.8184 88.4502 37.0283 88.1475 37.4482C87.848 37.8649 87.695 38.4557 87.6885 39.2207V39.6309C87.6885 40.4121 87.8398 41.016 88.1426 41.4424C88.4486 41.8688 88.8717 42.082 89.4121 42.082C89.959 42.082 90.3789 41.8737 90.6719 41.457C90.9681 41.0404 91.1162 40.4316 91.1162 39.6309V39.2598ZM98.7217 43H97.4863L94.3174 37.9561V43H93.082V35.8906H94.3174L97.4961 40.9541V35.8906H98.7217V43ZM103.837 39.8262H100.917V42.0137H104.33V43H99.6816V35.8906H104.296V36.8867H100.917V38.8496H103.837V39.8262ZM108.552 41.1689C108.552 40.8564 108.441 40.6156 108.22 40.4463C108.002 40.277 107.606 40.1061 107.033 39.9336C106.46 39.7611 106.005 39.569 105.666 39.3574C105.018 38.9505 104.694 38.4199 104.694 37.7656C104.694 37.1927 104.927 36.7207 105.393 36.3496C105.861 35.9785 106.468 35.793 107.214 35.793C107.709 35.793 108.15 35.8841 108.537 36.0664C108.924 36.2487 109.229 36.5091 109.45 36.8477C109.672 37.1829 109.782 37.5557 109.782 37.9658H108.552C108.552 37.5947 108.435 37.305 108.2 37.0967C107.969 36.8851 107.637 36.7793 107.204 36.7793C106.8 36.7793 106.486 36.8656 106.262 37.0381C106.04 37.2106 105.93 37.4515 105.93 37.7607C105.93 38.0212 106.05 38.2393 106.291 38.415C106.532 38.5876 106.929 38.7568 107.482 38.9229C108.036 39.0856 108.48 39.2728 108.815 39.4844C109.151 39.6927 109.396 39.9336 109.553 40.207C109.709 40.4772 109.787 40.7946 109.787 41.1592C109.787 41.7516 109.559 42.2236 109.104 42.5752C108.651 42.9235 108.036 43.0977 107.258 43.0977C106.743 43.0977 106.27 43.0033 105.837 42.8145C105.407 42.6224 105.072 42.3587 104.831 42.0234C104.593 41.6882 104.475 41.2975 104.475 40.8516H105.71C105.71 41.2552 105.843 41.5677 106.11 41.7891C106.377 42.0104 106.76 42.1211 107.258 42.1211C107.688 42.1211 108.01 42.0348 108.225 41.8623C108.443 41.6865 108.552 41.4554 108.552 41.1689ZM111.675 43H110.444V35.8906H111.675V43ZM116.761 41.3447H114.007L113.431 43H112.146L114.832 35.8906H115.94L118.631 43H117.342L116.761 41.3447ZM114.354 40.3486H116.414L115.384 37.3994L114.354 40.3486Z" fill="#263238"/>
                            </svg>
                        </div>

                        <div className={'col-7 offset-1 mt-3'}>
                            <ul className="list-group list-group-horizontal d-flex justify-content-between" style={{listStyle: 'none'}}>
                                <li>
                                    <p className="nav-link" aria-current="page" style={{fontWeight: '400', fontSize:'18px'}}>Services</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link" aria-current="page" style={{fontWeight: '400', fontSize:'18px'}}>Product</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link" aria-current="page" style={{fontWeight: '400', fontSize:'18px'}}>Technology</p>
                                </li>
                                <li className="nav-item dropdown">
                                    <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false" style={{fontWeight: '400', fontSize:'18px'}}>
                                        About
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><p className="dropdown-item">Action</p></li>
                                        <li><p className="dropdown-item">Another action</p></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><p className="dropdown-item">Something else here</p></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false" style={{fontWeight: '400', fontSize:'18px'}}>
                                        About
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><p className="dropdown-item">Action</></li>
                                        <li><p className="dropdown-item">Another action</p></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><p className="dropdown-item">Something else here</p></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link active" aria-current="page" style={{fontWeight: '400', fontSize:'18px'}}>Partner</p>
                                </li>
                            </ul>


                        </div>
                        <div className={'col-2 d-flex flex-column justify-content-center'}>
                            <svg width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M44 3C44 1.89543 44.8954 1 46 1H62C63.1046 1 64 1.89543 64 3V15C64 16.1046 63.1046 17 62 17H46C44.8954 17 44 16.1046 44 15V3ZM62 4.8685V15H46V4.86851L54 10.2018L62 4.8685ZM61.1972 3H46.8028L54 7.79814L61.1972 3Z" fill="#1F2E35" fill-opacity="0.8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9.58579H0L9.29289 0.292893C9.68342 -0.0976315 10.3166 -0.0976306 10.7071 0.292894L20 9.58579H18V17.5858C18 18.1381 17.5523 18.5858 17 18.5858H3C2.44772 18.5858 2 18.1381 2 17.5858V9.58579ZM4 16.5858H8V11.5858H12V16.5858H16V8.41421L10 2.41421L4 8.41421V16.5858Z" fill="#1F2E35" fill-opacity="0.8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M94.59 6.17L89.41 1L88 2.41L93.17 7.58L94.59 6.17ZM98.5 1L100.54 3.04L88 15.59L89.41 17L101.96 4.46L104 6.5V1H98.5ZM97.42 11.82L98.83 10.41L101.96 13.54L104 11.5V17H98.5L100.55 14.95L97.42 11.82Z" fill="#1F2E35" fill-opacity="0.8"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </>:
                <>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-2 offset-10'}>
                                <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 2.71429V0H0V2.71429H25Z" fill="#455A64"/>
                                    <path d="M25 5.42857V8.14286H8.33333V5.42857H25Z" fill="#455A64"/>
                                    <path d="M25 13.5714V10.8571H0V13.5714H25Z" fill="#455A64"/>
                                    <path d="M25 19V16.2857H8.33333V19H25Z" fill="#455A64"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                </>
            }
        </>
    )
}

export default NavigationBar
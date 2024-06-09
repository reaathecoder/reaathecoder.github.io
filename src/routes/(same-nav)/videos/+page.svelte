<svelte:head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.3/css/bootstrap.min.css">
    <style>
        .video-card {
            position: relative;
        }
        .film-link {
            position: absolute;
            bottom: 120px;
            left: 0;
            background-color: #198754;
            padding: 0.5rem 1rem;
            border-top-right-radius: 0.25rem;
        }
        .date-circle {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #198754;
            color: white;
            font-size: 12px;
            width: 60px; /* Adjust size as needed */
            height: 60px; /* Adjust size as needed */
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</svelte:head>

<script>
    let videos = [
        { url : "https://www.aparat.com/video/video/embed/videohash/7Z0At/vt/frame" , title :  "آموزش مدیتیشن در طبیعت" , description : "آرامش در طبیعت" , length : 6 , month: "فروردین" , day : "1" } , 
        { url : "https://www.aparat.com/video/video/embed/videohash/C05z2/vt/frame" , title :  "آموزش بازی در برف" , description : "چگونه در برف بازی کنیم" , length : 10 ,  month: "اردیبهشت" , day : "8" } ,
        {
            url: "https://www.aparat.com/video/video/embed/videohash/EAwOH/vt/frame",
            title: "آموزش اسکی در برف",
            description: "چگونه اسکی در برف انجام دهیم",
            length: 10,
            month: "مرداد",
            day: "۱۲"
        },
        {
            url: "https://www.aparat.com/video/video/embed/videohash/0zmZY/vt/frame",
            title: "تفریح در برف",
            description: "روش‌های متفاوت برای تفریح در برف",
            length: 10,
            month: "آذر",
            day: "۲۲"
        }
    ];
</script>

<div class="container-fluid mx-auto" style="width:90%" dir="rtl">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
        {#each videos as video , index }
        <div class="col" >
            <div class="card mb-3 video-card" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; ">
                <div class="ratio ratio-16x9" >
                    <iframe src={video.url} allow="autoplay" allowfullscreen style="border-radius:5px;"></iframe>
                </div>
                <div class="card-body">
                    <a href="#" class="card-title text-decoration-none text-lg"><h6>{video.title}</h6></a>
                    <p class="card-text text-muted" style="font-size:15px;">{video.description}</p>
                    <p class="card-text text-muted">{video.length} دقیقه</p>
                </div>
                <div class="film-link text-white">
                    فیلم
                </div>
                <div class="text-white bg-success px-4 py-2 text-sm rounded-circle position-absolute top-0 end-0 date-circle" style="margin-top: 10px; margin-right: 10px; gap:5px;">
                    <span class="font-weight-bold">{video.day}</span>
                    <small>{video.month}</small>
                </div>
            </div>
        </div>
        {/each}
    </div>
</div>

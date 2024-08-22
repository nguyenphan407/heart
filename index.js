import { v2 as cloudinary } from 'cloudinary';

(async function () {

    // Configuration
    cloudinary.config({
        cloud_name: 'dlc1n2y1f',
        api_key: '584636285164836',
        api_secret: 'CLOUDINARY_URL=cloudinary://584636285164836:UnKcKrm8l33zSvFm69Xn3vUDHOs@dlc1n2y1f' // Click 'View API Keys' above to copy your API secret
    });

    // Upload an image
    const uploadResult = await cloudinary.uploader
        .upload(
            '/Users/phanhoangnguyen/Downloads/IMG_0779.JPG', {
            public_id: 'ngocChan',
        }
        )
        .catch((error) => {
            console.log(error);
        });

    console.log(uploadResult);

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });

    console.log(optimizeUrl);

    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });

    console.log(autoCropUrl);
})();

<iframe width="951" height="535" src="https://www.youtube.com/embed/-esiEI4HTdk" title="(Lyric Video) Cơn Mưa Cuối - JustaTee x Binz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
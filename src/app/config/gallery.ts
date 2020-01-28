import { NgxGalleryAnimation } from 'ngx-gallery';

export let galleryOptions = [
    {
        width: '600px',
        height: '600px',
        thumbnailsColumns: 4,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        previewAutoPlay: true,
        previewAutoPlayPauseOnHover: true,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true,
        previewCloseOnEsc: true
    },
    // max-width 800
    {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
    },
    // max-width 400
    {
        breakpoint: 400,
        preview: false
    }
];

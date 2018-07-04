/**
 * Created by aayusharora on 7/4/18.
 */


function ImageProcessing() {
    getImage(function(image){
       enhanceImage(image, function(enhImage){
           console.log("Enhancing Image");
           console.log("Optimization is started....");
           console.log("Enhanced Image is "+ enhImage);
           OptimizeImage(enhImage, function(img){
               console.log(img);

           });
       });
    })
}

function getImage(cb) {

  setTimeout(function(){
      console.log("Getting the Image");
      let img = 'abc.jpeg';
      cb(img);
  },0)

}

function enhanceImage(img, cb) {
    console.log(" I can enhance this image " + img)
    let image = img + " enhanced";
    cb(image);
}

function OptimizeImage(enhImage, cb) {
    setTimeout(function(){
        console.log("Optimizing Image");
        let optimisedImage = enhImage + " Optimised";
        cb(optimisedImage);
    })

}
ImageProcessing();
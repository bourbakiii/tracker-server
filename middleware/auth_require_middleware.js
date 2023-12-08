export function $AuthMiddleware(req,res,next){
    console.log("AUTH REQUIRE MIDDLEWARE");
    next();
}

const express = require ( 'express' );
const app = express ();
const collegeRoutes = express . Router ();
// 
let College = require ( '../models/college' );
// Defined store route
collegeRoutes . route ( '/add' ). post ( function ( req , res ) {
let college = new College ( req . body );
college . save ()
. then ( college => {
res . status ( 200 ). json ({ 'college' : 'college in added successfully' });
})
. catch ( err => {
res . status ( 400 ). send ( "unable to save to database" );
});
});
// Defined get data(index or listing) route
collegeRoutes . route ( '/' ). get ( function ( req , res ) {
college . find ( function ( err , college ){
if ( err ){
console . log ( err );
}
else {
res . json ( college );
}
});
});
// Defined edit route
collegeRoutes . route ( '/edit/:id' ). get ( function ( req , res ) {
let id = req . params . id ;
college. findById ( id , function ( err , college ){
res . json ( college );
});
});
// Defined update route
collegeRoutes . route ( '/update/:id' ). post ( function ( req , res ) {
college . findById ( req . params . id , function ( err , next , college ) {
if (! college )
return next ( new Error ( 'Could not load Document' ));
else {
college . person_name = req . body . person_name ;
college . id_number = req . body .id_number ;
college . phone_number = req . body . phone_number ;
college . save (). then ( college => {
res . json ( 'Update complete' );
})
. catch ( err => {
res . status ( 400 ). send ( "unable to update the database" );
});
}
});
});
// Defined delete | remove | destroy route
collegeRoutes . route ( '/delete/:id' ). get ( function ( req , res ) {
college. findByIdAndRemove ({ _id: req . params . id }, function ( err , business ){
if ( err ) res . json ( err );
else res . json ( 'Successfully removed' );
});
});
module . exports = collegeRoutes ;
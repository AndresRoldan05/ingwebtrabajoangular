const mongoose = require ( 'mongoose' );
const Schema = mongoose . Schema ;
// Define collection and schema for Business
let college = new Schema ({
person_name: {
type: String
},
id_number: {
type: Number
},
phone_number: {
type: Number
}
},{collection: 'college'
});
module . exports = mongoose . model ( 'college' , college );
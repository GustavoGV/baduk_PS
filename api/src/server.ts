import { app } from "./app";
import { connect } from "mongoose"

connect('mongodb://localhost:27017/test')
app.listen(3333)
import { connect } from 'mongoose';
import { app } from './app';

connect('mongodb://localhost:27017/baduk');
app.listen(3333);

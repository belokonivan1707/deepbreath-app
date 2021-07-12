import mongoose from 'mongoose';
import colors from 'colors';

import makersSeed from './seed-data/makers';
import productsSeed from './seed-data/products';

import Maker from '../modules/maker/maker.model';
import Product from '../modules/product/product.model';

import { connectDB } from '.';

connectDB();

const importData = async () => {
  try {
    await Maker.deleteMany();
    await Product.deleteMany();

    await Maker.insertMany(makersSeed);
    await Product.insertMany(productsSeed);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Maker.deleteMany();
    await Product.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

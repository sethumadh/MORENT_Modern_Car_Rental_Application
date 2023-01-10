import mongoose, { Document, Schema } from 'mongoose';

export interface ICars {
	car_title: string;
	car_brand: string;
	car_body_type: string;
	maximum_gasoline: number;
	transmission_type: string;
	seat_capacity: number;
	daily_rate: number;
	pickUp_Location: string;
	dropOff_Location: string;
	availability_From: Date;
	availability_To: Date;
	file_path: string;
	uploaded_car_image: string;
}

export interface ICarsModel extends ICars, Document {}

const CarsSchema: Schema = new Schema(
	{
		car_title: { type: String, required: true, unique: true },
		car_brand: { type: String, required: true },
		car_body_type: { type: String, required: true },
		maximum_gasoline: { type: Number, required: true },
		transmission_type: { type: String, required: true },
		seat_capacity: { type: Number, required: true },
		daily_rate: { type: Number, required: true },
		pickUp_Location: { type: String, required: false },
		dropOff_Location: { type: String, required: false },
		availability_From: { type: Date, required: false },
		availability_To: { type: Date, required: false },
		file_path: { type: String, required: false },
		uploaded_car_image: { type: String, require: false }
	},
	{
		versionKey: false
	}
);

export default mongoose.model<ICarsModel>('Car', CarsSchema);

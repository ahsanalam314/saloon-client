import mongoose, { Model, Schema } from "mongoose";
import { IMenuModel } from "./interface/menu.model.interace";

const MenuSchema: Schema<IMenuModel> = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});


const Menu: Model<IMenuModel> = mongoose.model<IMenuModel>('Menu', MenuSchema);

export { Menu };
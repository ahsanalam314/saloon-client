import mongoose, { Model, Schema } from "mongoose";
import { IMenu } from "./interface/menu.model.interace";

const MenuSchema: Schema<IMenu> = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});


const Menu: Model<IMenu> = mongoose.model<IMenu>('Menu', MenuSchema);

export { Menu };
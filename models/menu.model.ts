import { Schema, model } from "mongoose";
import { IMenu } from "./interface/menu.model.interace";

const MenuSchema = new Schema<IMenu>({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});


const Menu = model<IMenu>('Menu', MenuSchema);

export { Menu };
import React, { Component } from "react";
import { ListOfFilms } from "../shared/ListOfFilms";
import FilmsPresentation from "./FilmsPresentation";
import { SliderComponent } from "./SliderComponent";
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: ListOfFilms,
        };
    }

    render() {
        return (
            <div className="bg-gray-700 h-auto p-16">
                <div className="bg-white p-6">
                    <div className="hidden md:inline">
                        <SliderComponent ListOfFilms={this.state.films} />
                    </div>
                    <div className="text-center font-bold text-5xl p-8">
                        Danh sách phim
                    </div>
                    <FilmsPresentation ListOfFilms={this.state.films} />
                </div>
            </div>
        );
    }
}
export default Main;

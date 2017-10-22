import {Component} from '@angular/core';

@Component(
    {
    selector: 'app',
    templateUrl: './partials/app.html',
    styleURls: './css/app.css'
})

export class AppComponent
{
    name : string;
    artists : any;

    onClick(myItem, myElement)
    {
        this.name = myItem.name;
        myElement.style.backgroundColor="#FECE4E";
    }

    addArtist(value)
    {
        if (value !==''){
            this.artists.push(
                {
                    name: value,
                    school: 'Hard Knocks'
                }
            );
        }
    }

    constructor()
    {
        this.name = 'Zuhair Rayyes';
        this.artists = [
            {
                name: 'Barot Bellingham',
                school: 'Penn State'
            },{
                name: 'Jonathan Ferrar',
                school: 'University of California'
            },{
                name: 'Hillary Post',
                school: 'University of Florida'
            }
        ]
    }
}
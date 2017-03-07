import { Component } from '@angular/core';
import {Document } from './document';
@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	documents: Document[] = [
		{
			title: "My First Doc",
			description: "Lorem Ipsum...",
			file_url: "http://google.com",
			updated_at: "11/11/2017",
			image_url: "http://google.com",
		},
		{	title: "My Second Doc",
			description: "Lorem Ipsum 2nd doc...",
			file_url: "http://google.com",
			updated_at: "12/11/2017",
			image_url: "http://google.com",	
		},
		{ 	title: "My Third Doc",
			description: "Lorem Ipsum 3rd...",
			file_url: "http://google.com",
			updated_at: "13/11/2017",
			image_url: "http://google.com",
		}
	]
}
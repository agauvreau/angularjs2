import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, 'Abc Company','http://portfolio1.jordanhudgens.com', 
    'Ruby on Rails1', 151, 121, 15.1, 'jordan1@devcamp.com')
    proposalTwo: Proposal = new Proposal(12, 'Xyz Company','http://portfolio2.jordanhudgens.com', 
    'Ruby on Rails2', 152, 122, 15.2, 'jordan2@devcamp.com')
    proposalThree: Proposal = new Proposal(1, 'DEF Company','http://portfolio3.jordanhudgens.com', 
    'Ruby on Rails3', 153, 123, 15.3, 'jordan3@devcamp.com')
    proposals: Proposal[] = [
        this.proposalOne, this.proposalTwo, this.proposalThree
    ]
}
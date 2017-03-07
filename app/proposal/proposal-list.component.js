"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var proposal_1 = require('./proposal');
var ProposalListComponent = (function () {
    function ProposalListComponent() {
        this.proposalOne = new proposal_1.Proposal(15, 'Abc Company', 'http://portfolio1.jordanhudgens.com', 'Ruby on Rails1', 151, 121, 15.1, 'jordan1@devcamp.com');
        this.proposalTwo = new proposal_1.Proposal(12, 'Xyz Company', 'http://portfolio2.jordanhudgens.com', 'Ruby on Rails2', 152, 122, 15.2, 'jordan2@devcamp.com');
        this.proposalThree = new proposal_1.Proposal(1, 'DEF Company', 'http://portfolio3.jordanhudgens.com', 'Ruby on Rails3', 153, 123, 15.3, 'jordan3@devcamp.com');
        this.proposals = [
            this.proposalOne, this.proposalTwo, this.proposalThree
        ];
    }
    ProposalListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proposal-list',
            templateUrl: 'proposal-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProposalListComponent);
    return ProposalListComponent;
}());
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map
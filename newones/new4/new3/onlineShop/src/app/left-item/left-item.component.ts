import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, EventEmitter, Output} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'All Categories',
    children: [{name: 'Market'}, {name: 'Shopping'}, {name: 'Jewellery'}],
  },
  {
    name: 'Electronics',
    children: [
      {
        name: 'Televison',
        children: [{name: 'Remote'}, {name: ' Display'}],
      },
      {
        name: 'Freezer',
        children: [{name: 'Bottle'}, {name: 'Ice'}],
      },
    ],
  },
  {
    name: 'Cellphones & Smartphones',
    children: [
      {
        name: 'Cell',
        children: [{name: 'cellphone Accessories'}, {name: 'cell[phone Gadgets'}],
      },
      {
        name: 'Phone',
        children: [{name: 'Applications'}, {name: 'Smart Watches'}],
      },
    ],
  },
  {
    name: 'Business  & Industrial',
    children: [
      {
        name: 'Televison',
        children: [{name: 'Remote'}, {name: ' Display'}],
      },
      {
        name: 'Freezer',
        children: [{name: 'Bottle'}, {name: 'Ice'}],
      },
    ],
  },
  {
    name: 'Computers',
    children: [
      {
        name: 'Televison',
        children: [{name: 'Remote'}, {name: ' Display'}],
      },
      {
        name: 'Freezer',
        children: [{name: 'Bottle'}, {name: 'Ice'}],
      },
    ],
  },

  {
    name: 'Consumer Electronics',
    children: [
      {
        name: 'Televison',
        children: [{name: 'Remote'}, {name: ' Display'}],
      },
      {
        name: 'Freezer',
        children: [{name: 'Bottle'}, {name: 'Ice'}],
      },
    ],
  },
  {
    name: 'Home & Garden',
    children: [
      {
        name: 'Televison',
        children: [{name: 'Remote'}, {name: ' Display'}],
      },
      {
        name: 'Freezer',
        children: [{name: 'Bottle'}, {name: 'Ice'}],
      },
    ],
  },
  {
    name: 'Collectibles',
    children: [
      {
        name: 'Televison',
        children: [{name: 'Remote'}, {name: ' Display'}],
      },
      {
        name: 'Freezer',
        children: [{name: 'Bottle'}, {name: 'Ice'}],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-left-item',
  templateUrl: './left-item.component.html',
  styleUrls: ['./left-item.component.scss']
})

export class LeftItemComponent  {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  panelOpenState = false;
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  constructor() { 
    this.dataSource.data = TREE_DATA;
  }
  yearsSelected=[];
   @Output() changedfilters = new EventEmitter();
   clickedtree(node:any){
    console.log(node);
    console.log(node.expandable);
    if(!node.expandable){  
     this.changedfilters.emit({category:node.name});
    }else if(node.name=="All Categories"){
      this.changedfilters.emit({category:'all'});
    }
    
   }
  checkboxChanged(eve:any,ind:number){
    console.log(eve.target.value);
    console.log(eve.target.checked);
    if(eve.target.checked==true){
      this.selectedYears.push(eve.target.value);
    }else{
      let tempYears = this.selectedYears.filter((yr)=>{
        return yr!=eve.target.value;
      })
      this.selectedYears = tempYears;
    }
    this.yearsData[ind].checked = eve.target.checked;
    console.log(ind);
    console.log(this.selectedYears);
    this.changedfilters.emit({years:[...this.selectedYears]})
    
  }
  selectedYears:any[]=[]
  yearsData =[{value:'2022',checked:false},{value:'2021',checked:false},{value:'2020',checked:false},{value:'2019',checked:false},{value:'2018',checked:false}];
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

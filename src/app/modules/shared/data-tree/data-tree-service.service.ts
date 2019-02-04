import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DataTreeServiceService {

  constructor() { }

    // ---------------- on toggle node ( open && close ) ----------------
    onNodeToggleChange = (node, event) => node.opened = event.target.checked;

    // ---------------- on toggle node (  check && uncheck ) ----------------
    onSelectNode(node, children, childrenNodesName) {
        if ( children && children.length > 0 ) {
            children.filter( child => child.selected = !node.selected);
            this.toggleChildren(children, !node.selected, childrenNodesName);
        }
        node.selected = !node.selected;
    }
    toggleChildren(children, selection, childrenNodesName) {
        children.filter( child => {
            child.selected = selection;
            if ( child[childrenNodesName] && child[childrenNodesName].length > 0) {
                this.toggleChildren( child[childrenNodesName], selection, childrenNodesName);
            }
        });
    }

    // ---------------- on toggle child node ( check && uncheck ) ----------------
    onChildSelectIonChange = (node, children, event) => node.selected = children.filter( child => child.selected).length === children.length;
}

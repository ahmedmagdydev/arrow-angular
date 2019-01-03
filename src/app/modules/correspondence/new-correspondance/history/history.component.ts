import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {

    showNodePreview;
    selectedNode: any;
    heistory: any[] = [
        {
            title: 'مينا (مدير مساعد شئون عاملين ) ',
            data: [
                {title: 'receiveDate', value: ''},
                {title: 'correspondenceNo', value: '123456/2500/2019'},
                {title: 'needAction', value: true},
                {title: 'dueDate', value: new Date()},
                {title: 'status', value:  'انشأت'},
            ],
            correspondence: {
                "index": 33,
                "priority": 2,
                "status": "assigned",
                "sender": "احمد مجدى (مساعد مدير شئون العاملين)",
                "to": "عبدالله",
                "cc": "خالد, محمود",
                "needAction": false,
                "createdDate": "Thursday, August 21, 2014 8:13 AM",
                "relatedActions": ["replied","forwarded","attachment","tasks","related","recalled","substitution"],
                "keyords": "new",
                "number": 3375,
                "template": [
                    {
                        "name":"نموذج معامله داخليه"
                    },
                    {
                        "url": "New Hampshire.com"
                    }
                ],
                "shortDesc": "Quis sint non pariatur nostrud. Tempor ad ex dolore enim tempor voluptate dolore magna nisi ullamco in.",
                "redirectInst": "laboris labore velit laborum et",
                "redirectComment": "In sit elit sunt sunt laborum sit magna id excepteur labore Lorem."
            },
            childs: [
                {
                    title: 'محمد قرنى ( مدير مساعد اداره الاكل ) ' ,
                    data: [
                        {title: 'receiveDate', value: new Date()},
                        {title: 'correspondenceNo', value: '123456/2500/2019'},
                        {title: 'needAction', value: true},
                        {title: 'dueDate', value: new Date()},
                        {title: 'status', value:  'انجزت'},
                    ],
                    correspondence: {
                        "index": 33,
                        "priority": 2,
                        "status": "assigned",
                        "sender": "احمد مجدى (مساعد مدير شئون العاملين)",
                        "to": "عبدالله",
                        "cc": "خالد, محمود",
                        "needAction": false,
                        "createdDate": "Thursday, August 21, 2014 8:13 AM",
                        "relatedActions": ["replied","forwarded","attachment","tasks","related","recalled","substitution"],
                        "keyords": "new",
                        "number": 3375,
                        "template": [
                            {
                                "name":"نموذج معامله داخليه"
                            },
                            {
                                "url": "New Hampshire.com"
                            }
                        ],
                        "shortDesc": "Quis sint non pariatur nostrud. Tempor ad ex dolore enim tempor voluptate dolore magna nisi ullamco in.",
                        "redirectInst": "laboris labore velit laborum et",
                        "redirectComment": "In sit elit sunt sunt laborum sit magna id excepteur labore Lorem."
                    }
                },
                // {title: 'node 1.2', childs: [{title: 'node 1.2.1',
                //         childs: [{title: 'node 1.2.1.1'}, {title: 'node 1.2.1'}]}, {title: 'node 1.2.1.2'}]
                // },
                {title: 'عمر عادل ( مددير مساعد اداره القهوه ) '  ,
                    data: [
                        {title: 'receiveDate', value: new Date()},
                        {title: 'correspondenceNo', value: '123456/2500/2019'},
                        {title: 'needAction', value: true},
                        {title: 'dueDate', value: new Date()},
                        {title: 'status', value:  'احيلت'},
                    ],
                    correspondence: {
                        "index": 33,
                        "priority": 2,
                        "status": "assigned",
                        "sender": "احمد مجدى (مساعد مدير شئون العاملين)",
                        "to": "عبدالله",
                        "cc": "خالد, محمود",
                        "needAction": false,
                        "createdDate": "Thursday, August 21, 2014 8:13 AM",
                        "relatedActions": ["replied","forwarded","attachment","tasks","related","recalled","substitution"],
                        "keyords": "new",
                        "number": 3375,
                        "template": [
                            {
                                "name":"نموذج معامله داخليه"
                            },
                            {
                                "url": "New Hampshire.com"
                            }
                        ],
                        "shortDesc": "Quis sint non pariatur nostrud. Tempor ad ex dolore enim tempor voluptate dolore magna nisi ullamco in.",
                        "redirectInst": "laboris labore velit laborum et",
                        "redirectComment": "In sit elit sunt sunt laborum sit magna id excepteur labore Lorem."
                    }
                },
        ]}
    ];
    openNodePreview(selectedNode) {
        this.selectedNode = selectedNode;
        this.showNodePreview = true;
    }
    closeNodePreview() {
        this.selectedNode = null;
        this.showNodePreview = false;
    }












/*






public gojsArray = { "class": "go.TreeModel",
  "nodeDataArray": [
{"key":1, "name":"Stella Payne Diaz", "title":"CEO"},
{"key":2, "name":"Luke Warm", "title":"VP Marketing/Sales", "parent":1},
{"key":3, "name":"Meg Meehan Hoffa", "title":"Sales", "parent":2},
{"key":4, "name":"Peggy Flaming", "title":"VP Engineering", "parent":1},
{"key":5, "name":"Saul Wellingood", "title":"Manufacturing", "parent":4},
{"key":6, "name":"Al Ligori", "title":"Marketing", "parent":2},
{"key":7, "name":"Dot Stubadd", "title":"Sales Rep", "parent":3},
{"key":8, "name":"Les Ismore", "title":"Project Mgr", "parent":5},
{"key":9, "name":"April Lynn Parris", "title":"Events Mgr", "parent":6},
{"key":10, "name":"Xavier Breath", "title":"Engineering", "parent":4},
{"key":11, "name":"Anita Hammer", "title":"Process", "parent":5},
{"key":12, "name":"Billy Aiken", "title":"Software", "parent":10},
{"key":13, "name":"Stan Wellback", "title":"Testing", "parent":10},
{"key":14, "name":"Marge Innovera", "title":"Hardware", "parent":10},
{"key":15, "name":"Evan Elpus", "title":"Quality", "parent":5},
{"key":16, "name":"Lotta B. Essen", "title":"Sales Rep", "parent":3}
 ]
}
   ngAfterViewInit() {
	

	let t = $;

   	t('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
if( e.currentTarget.id == 'history-tab'){
        init()
        OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
               OrgChart.templates.myTemplate.size = [241, 88];
               OrgChart.templates.myTemplate.node = '  <rect width="241" height="88" style="fill:#e7e7e7" rx="20"></rect>'; 

           OrgChart.templates.myTemplate.rippleRadius = 20;
           OrgChart.templates.myTemplate.rippleColor = "#ccc";
               
               OrgChart.templates.myTemplate.name = '<text style="font-size: 24px;" fill="#000" x="100" y="20" text-anchor="middle">{val}</text>';
               OrgChart.templates.myTemplate.status_container = '<rect style="font-size: 10px;color: #fff;" fill="#000" x="40" y="5">{val}</rect>';
               OrgChart.templates.myTemplate.status = '<text style="font-size: 10px;color: #fff;" fill="#000" x="40" y="5">{val}</text>';
               OrgChart.templates.myTemplate.field_2 = '<text style="font-size: 16px;" fill="#000" x="100" y="60" text-anchor="middle">{val}</text>';
               
               OrgChart.templates.myTemplate.img_0 = '<clipPath id="ulaImg"><circle cx="100" cy="150" r="40"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110"  width="80" height="80"></image>';
               
               OrgChart.templates.myTemplate.edge = '<path  stroke="#686868" stroke-width="1px" fill="none" edge-id="[{id}][{child-id}]" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}"/>';

               

               OrgChart.templates.myTemplate.expandCollapseSize = 36;
               OrgChart.templates.myTemplate.plus = "";        
                      OrgChart.templates.myTemplate.minus = "";
               

               OrgChart.templates.myTemplate.pointer = '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)"><g transform="matrix(0.3,0,0,0.3,-17,-17)"><polygon fill="#0890D3" points="53.004,173.004 53.004,66.996 0,120"/><polygon fill="#0890D3" points="186.996,66.996 186.996,173.004 240,120"/><polygon fill="#0890D3" points="66.996,53.004 173.004,53.004 120,0"/><polygon fill="#0890D3" points="120,240 173.004,186.996 66.996,186.996"/><circle fill="#0890D3" cx="120" cy="120" r="30"/></g></g>';
               
               var chart = new OrgChart(document.getElementById("orgchart"), {
                   template: "myTemplate",            
                   enableSearch: false,
                  
                  
                   nodeBinding: {
                       name: "name",
                       status: "status",
                       status_container:"black",
                       field_2:"date",
                       img_0:''
                   },   
                   nodes: [
                       { id: 1, name: "Amber McKenzie", status: "CEO", date: "25/9/2018" },
                       { id: 2, pid: 1, name: "Ava Field", status: "IT Manager", date: "25/9/2018", mobile: "0878108255" },
                       { id: 3, pid: 1, name: "Peter Stevens", status: "HR Manager", date: "25/9/2018" },
                       { id: 4, pid: 2, name: "Peter Stevens", status: "HR Manager", date: "25/9/2018" },
                       { id: 5, pid: 3, name: "Peter Stevens", status: "HR Manager", date: "25/9/2018" },
                       { id: 6, pid: 2, name: "Peter Stevens", status: "HR Manager", date: "25/9/2018" },
                       { id: 7, pid: 3, name: "Peter Stevens", status: "HR Manager", date: "25/9/2018" }
                   ]
               });      

   		
	    	    // init()
	    	    }
	    	}) 

   var _this = this;

   function init() {
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    var myDiagram =
      $(go.Diagram, "myDiagramDiv", // must be the ID or reference to div
        
        { isReadOnly: true },
        {
          initialContentAlignment: go.Spot.Center,
          maxSelectionCount: 1, // users can select only one part at a time
          validCycle: go.Diagram.CycleDestinationTree, // make sure users can only create trees

          layout:
            $(go.TreeLayout,
              {
                treeStyle: go.TreeLayout.StyleLastParents,
                arrangement: go.TreeLayout.ArrangementHorizontal,
                // properties for most of the tree:
                angle: 90,
                layerSpacing: 35,
                // properties for the "last parents":
                alternateAngle: 90,
                alternateLayerSpacing: 35,
                alternateAlignment: go.TreeLayout.AlignmentBus,
                alternateNodeSpacing: 20
              }),
          "undoManager.isEnabled": true // enable undo & redo
        });





    var levelColors = ["#e7e7e7"];

    // override TreeLayout.commitNodes to also modify the background brush based on the tree depth level
    myDiagram.layout.commitNodes = function() {
      go.TreeLayout.prototype.commitNodes.call(myDiagram.layout);  // do the standard behavior
      // then go through all of the vertexes and set their corresponding node's Shape.fill
      // to a brush dependent on the TreeVertex.level value
      myDiagram.layout.network.vertexes.each(function(v) {
        if (v.node) {
          var level = v.level % (levelColors.length);
          var color = levelColors[level];
          var shape = v.node.findObject("SHAPE");
          if (shape) shape.fill = $(go.Brush, "Linear", { 0: color, 1: go.Brush.darkenBy(color, 0.05), start: go.Spot.Left, end: go.Spot.Right });
        }
      });
    };

    // This function is used to find a suitable ID when modifying/creating nodes.
    // We used the counter combined with findNodeDataForKey to ensure uniqueness.
    function getNextKey() {
      var key = nodeIdCounter;
      while (myDiagram.model.findNodeDataForKey(key) !== null) {
        key = nodeIdCounter--;
      }
      return key;
    }

    var nodeIdCounter = -1; // use a sequence to guarantee key uniqueness as we add/remove/modify nodes



    // // this is used to determine feedback during drags
    // function mayWorkFor(node1, node2) {
    //   if (!(node1 instanceof go.Node)) return false;  // must be a Node
    //   if (node1 === node2) return false;  // cannot work for yourself
    //   if (node2.isInTreeOf(node1)) return false;  // cannot work for someone who works for you
    //   return true;
    // }

    // This function provides a common style for most of the TextBlocks.
    // Some of these values may be overridden in a particular TextBlock.
    function textStyle() {
      return { font: "9pt  Segoe UI,sans-serif", stroke: "black" };
    }

    // This converter is used by the Picture.
    function findHeadShot(key) {
      if (key < 0 || key > 16) return "images/HSnopic.png"; // There are only 16 images on the server
      return "images/HS" + key + ".png"
    }

    // define the Node template
    myDiagram.nodeTemplate =
      $(go.Node, "Auto",
        
        
        // for sorting, have the Node.text be the data.name
        new go.Binding("text", "name"),
        // bind the Part.layerName to control the Node's layer depending on whether it isSelected
        new go.Binding("layerName", "isSelected", function(sel) { return sel ? "Foreground" : ""; }).ofObject(),
        // define the node's outer shape
        $(go.Shape, "Rectangle",
          {
            name: "SHAPE", fill: "white", stroke: null,
            // set the port properties:
            portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer"
          }),
        $(go.Panel, "Horizontal",
          $(go.Picture,
            {
              name: "Picture",
              desiredSize: new go.Size(39, 50),
              margin: new go.Margin(6, 8, 6, 10),
            },
            new go.Binding("source", "key", findHeadShot)),
          // define the panel where the text will appear
          $(go.Panel, "Table",
            {
              maxSize: new go.Size(150, 999),
              margin: new go.Margin(6, 10, 0, 3),
              defaultAlignment: go.Spot.Left
            },
            $(go.RowColumnDefinition, { column: 2, width: 4 }),
            $(go.TextBlock, textStyle(),  // the name
              {
                row: 0, column: 0, columnSpan: 5,
                font: "12pt Segoe UI,sans-serif",
                editable: false, isMultiline: false,
                minSize: new go.Size(10, 16)
              },
              new go.Binding("text", "name").makeTwoWay()),
            $(go.TextBlock,  textStyle(),
              { row: 1, column: 0, columnSpan: 5 }),
            $(go.TextBlock, textStyle(),
              {
                row: 1, column: 1, columnSpan: 4,
                editable: false, isMultiline: false,
                minSize: new go.Size(10, 14),
              },
              new go.Binding("text", "title").makeTwoWay()),
            
            $(go.TextBlock, textStyle(),  // the comments
              {
                row: 3, column: 0, columnSpan: 5,
                font: "italic 9pt sans-serif",
                wrap: go.TextBlock.WrapFit,
                editable: true,  // by default newlines are allowed
                minSize: new go.Size(10, 14)
              },
              new go.Binding("text", "comments").makeTwoWay())
          )  // end Table Panel
        ) // end Horizontal Panel
      );  // end Node

    

    // define the Link template
    myDiagram.linkTemplate =
      $(go.Link, go.Link.Orthogonal,
        { corner: 5, relinkableFrom: false, relinkableTo: false },
        $(go.Shape, { strokeWidth: 2, stroke: "#ccc" }));  // the link shape

    // read in the JSON-format data from the "mySavedModel" element
    load();

console.log(_this.gojsArray)

      function load() {
    myDiagram.model = go.Model.fromJson(_this.gojsArray);
  }
  }


   // init()
}*/

}

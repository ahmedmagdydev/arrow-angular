/* ========================== correspondences ===================== */
export const correspondencesStatusLookup: any[] = [
  {title: 'new', coresspondences: [], percent: 0},
  {title: 'done', coresspondences: [], percent: 0},
  {title: 'assigned', coresspondences: [], percent: 0},
  {title: 'waiting', coresspondences: [], percent: 0},
  {title: 'delayed', coresspondences: [], percent: 0}
];
export const correspondencesTableInfoLookup: any = {
  columns: [
    {title: 'priority', name: 'priority'}, {title: 'title', name: 'title'}, {title: 'sender', name: 'sender'},
    {title: 'createdDate', name: 'createdDate', isDate: true}, {title: 'number', name: 'number'},
    {title: 'relatedActions', name: 'relatedActions'}, {title: 'template.name', name: 'template', innerName: 'name'},
  ],
  detailsColumns: [
    {title: 'priority', name: 'priority'}, {title: 'title', name: 'title'}, {title: 'sender', name: 'sender'},
    {title: 'number', name: 'number'},
    {title: 'relatedActions', name: 'relatedActions'}, {title: 'template.name', name: 'template', innerName: 'name'},
    {title: 'to', name: 'to'}, {title: 'cc', name: 'cc'},
    {title: 'createdDate', name: 'createdDate', isDate: true}, {title: 'keywords', name: 'keyords'},
    {title: 'shortDesc', name: 'shortDesc'},
    {title: 'redirectInst', name: 'redirectInst'}, {title: 'redirectComment', name: 'redirectComment'},
  ],
  data: []
};
export const newCorrespondenceActionsLookup: any[] = [
  {action: 'send'},
  {action: 'save'},
  {action: 'save-close'},
  {action: 'archive'},
  {action: 'temp-archive'},
  {action: 'archive-send'},
  {action: 'show-archived-versions'},
  {action: 'print'},
  {action: 'show-history'},
  {action: 'export'},
  {action: 'add-task'},
  {action: 'scan'},
  {action: 'attachments'},
  {action: 'related-correspondence'},
  {action: 'links'},
];

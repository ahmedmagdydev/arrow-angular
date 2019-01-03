/* ========================== correspondences ===================== */
export const correspondencesStatusLookup: any[] = [
  {title: 'new', coresspondences: [], percent: 0},
  {title: 'done', coresspondences: [], percent: 0},
  {title: 'assigned', coresspondences: [], percent: 0},
  {title: 'waiting', coresspondences: [], percent: 0},
  {title: 'delayed', coresspondences: [], percent: 0}
];
export const correspondencesPortalStatusLookup: any[] = [
    {title: 'new', coresspondences: [], percent: 0},
    {title: 'done', coresspondences: [], percent: 0},
    {title: 'assigned', coresspondences: [], percent: 0},
    {title: 'waiting', coresspondences: [], percent: 0},
    {title: 'delayed', coresspondences: [], percent: 0},
    {title: 'deleted', coresspondences: [], percent: 0},
    {title: 'recall', coresspondences: [], percent: 0},
    {title: 'global', coresspondences: [], percent: 0},
    {title: 'notifications', coresspondences: [], percent: 0},
    {title: 'personalFolders', coresspondences: [], percent: 0},
];
export const correspondencesTableInfoLookup: any = {
  columns: [
    {title: 'priority', name: 'priority'}, {title: 'subject', name: 'title'}, {title: 'sender', name: 'sender'},
    {title: 'createdDate', name: 'createdDate', isDate: true}, {title: 'number', name: 'number'},
    {title: 'relatedActions', name: 'relatedActions'},
    {title: 'template.name', name: 'template', innerName: 'name'},
    {title: 'actionList', name: 'actionList'},
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

export  interface fileObject {
  name?: string, size?: number , lastModifiedDate?: string, type?: string, owner?: string,
  versions?: File[]
};


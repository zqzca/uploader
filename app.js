var App = function() {
  var root = div({cls:'foo'}, "hello");
  var body = document.body;

  var uploader = new UploaderComponent();
  var menu     = new Menu();
  var auth     = new Authentication();

  var subheader = span({cls:'sub-header'}, 'Upload Files');
  var header  = div({id:'header', cls: 'shadow'}, subheader, 'ZQZ');
  var sidebar = div({id:'sidebar-fixed'});
  var sidebar_container = div({id:'sidebar'}, sidebar);
  var footer  = div({id:'footer'}, div({cls:'text-tiny center'}, 'copyright 2015 zqz.ca'));
  var content = div({id:'content'});
  var content_container = div({id:'content-container'}, header, content, footer);

  var dom = div({id: 'app'}, sidebar_container, content_container);

  var mockedFile = {
    name: 'Mocked File',
    size: '1231',
    type: 'text/plain',
    state: 'uploading',
    slice: function() { return new Blob(["ddawd"], { type: 'text/plain' }); }
  };

  for ( var i = 0; i < 5; i++ ) {
    uploader.addFile(
      new UploadFile(mockedFile)
    );
  }

  sidebar.appendChild(auth.render());
  sidebar.appendChild(menu.render());
  content.appendChild(uploader.render());

  body.appendChild(dom);
};

a = new App();


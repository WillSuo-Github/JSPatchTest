defineClass('ViewController',{
    btnChick: function(sender){
    

            
            var tableViewVc = WSTableViewController.alloc().init();
            var redColor = require('UIColor').redColor();
            tableViewVc.view().setBackgroundColor(redColor);
            self.presentViewController_animated_completion(tableViewVc,YES,null);
    }
})

defineClass('WSTableViewController : UIViewController<UITableViewDataSource,UITableViewDelegate>',['sourceArr'],{
            
//            viewDidLoad : function({
//            
//               var view = require('UIView').alloc().init();
//               view.setBackgroundColor(require('UIColor').redColor());
//               
//               view.setFrame({x:100,y:100,width:50,height:50});
//               self.view().addSubview(view);
//            })
        viewDidLoad : function() {
            
           var tableView = require('UITableView').alloc().init();
           tableView.setBackgroundColor(require('UIColor').blueColor());
            tableView.setFrame(self.view().frame());
            self.view().addSubview(tableView);
            tableView.setDataSource(self);
            tableView.setDelegate(self);
            

        },
            
            sourceArr :function() {
            
            var sourceArr = [];
            if(!self.sourceArr) {
            
                    for(var i = 0; i < 10; i ++) {
            
                        sourceArr.push("cell from js " + i);
            
                    }
                }
                self.setSourceArr(sourceArr);
            
                return sourceArr;
            },
            numberOfSectionsInTableView: function(tableView) {
            return 1;
            },
            
            tableView_numberOfRowsInSection: function(tableView, section) {
            return self.sourceArr().length;
            },
            
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            
            var cell = tableView.dequeueReusableCellWithIdentifier("cell");
                if(!cell) {
                    cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0,"cell");
                }
            cell.textLabel().setText(self.sourceArr()[indexPath.row()]);
            return cell;
            },
})
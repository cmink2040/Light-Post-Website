import Entry from 'webiconjs';
import JS_Entry from 'webiconjs';

JS_Entry.JS_Entry.print_data()

JS_Entry.JS_Entry.fetchData().then((data: any) => {
    console.log(data, "IS THE DATA");
});



export default Entry.Entry;
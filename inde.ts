interface EditorStore {
  components: ComponentData[];
  currentElement: string;
}

interface ComponentData {
  props: {
    [key: string]: any;
  };
  id: string;
  name: string;
}

const components=[

  {
    id:'1',type:'l-text',
    props:{
      text:'hello',
      color:'green'
    }
  },
  {
    id:'2',type:'l-text',
    props:{
      text:'hello2',
      color:'red'
    }
  }

]

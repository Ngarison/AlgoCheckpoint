  //Programmation procédurale, tri et recherche" 
        //Task 1:Algorithme Produit Scalaire
        
        function dotProduct(v1, v2){
            let ps= v1*v2;
            return ps;
        }

        let tab = [12, 54, 76, 98, 0];

        function testDotProduct(v_tab){
            for (let j = 0; j < v_tab.length; j++) {
            for (let i = j+1; i < v_tab.length; i++) {
                if(dot_product(v_tab[j], v_tab[i])==0){
                    console.log(v_tab[j]+" et "+v_tab[i]+" sont scalaires!");
                }
            }
        }
    }

        testDotProduct(tab);

        //Task 2:Trie par insertion

        let tab2 = [12, 54, 76, 98, 0];

        function insertSort(arr){
            let x=0;
            for (let i = arr.length-1; i>0; i--) {
                if(arr[i]<arr[i-1]){
                    x= arr[i];
                    arr[i]=arr[i-1];
                    arr[i-1]=x;
                }
        }
        console.log(arr);
        }

        insertSort(tab2);

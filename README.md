# INTES_TP_Groupe6

NodeJS Tp 
  Groupe six 
   
   author：Xuechu WANG,Zhiwei PEI,Fan FEI
    
    Créer une API afin de gérer une liste de chansons dans une base de données MySQL,Implémentation de certaines API du CRUL, 
    ainsi que de Vérifier la validité des données 

1. Obtenez le code par le commande：
    git clone https://github.com/justplay-bit/INTES_Grouper6.git


2. Modifiez le fichier de configuration de la base de données dans <database.js> et <chanson.repostroy.js>  dans le fichier de configuration
   Par exemple： USER et PASSWORD.
	 
	 Et puis ,Créer une table nommée "tp" localement.


3. Installer le framework express:
    npm install --save express
		

4. Démarrer le projet
    node index.js


5. Tester l'api dans "postman"

    Par exemple [GET]URL：localhost:3000/api/songs
   
   [GET]URL：localhost:3000/api/songs/{id}
   
   [POST]URL:localhost:3000/api/songs
   
   avec body de json
   
   {
    "titre":"my song",
    "temps":5,
    "genre":"lovely song",
    "auteur":"mememe"
    }
    
    Bonus:
    
    [get]url:localhost:3000/api/artists
    
    attention!!!!!"Cela doit être fait sur le système mac"

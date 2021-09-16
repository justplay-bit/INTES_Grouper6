# INTES_TP_Groupe6

NodeJS Tp 
  Groupe six 
   
   author：Xuechu WANG,Zhiwei PEI,Fan FEI
    
    Créer une API afin de gérer une liste de chansons dans une base de données MySQL,Implémentation de certaines API du CRUL, 
    ainsi que de Vérifier la validité des données et les CORS

1. Obtenez le code par le commande：
    git clone https://github.com/justplay-bit/INTES_Grouper6.git


2. Modifiez le fichier de configuration de la base de données dans database.js dans le fichier de configuration
   Par exemple： USER et PASSWORD.
	 
	 Et puis ,Créer une table nommée "tp" localement.


3. Installer le framework express:
    npm install --save express
		
   Installer les CORS:
    npm install et ng serve


4. Démarrer le projet
    node index.js


5. Tester l'api dans "postman"
    Par exemple URL：localhost:3000/api/songs
		           	URL：localhost:4200/api/songs/{id}

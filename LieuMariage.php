<?php

switch($_SERVER['REQUEST_METHOD'])
{
    case 'GET':
        if(!isset($_GET["id_lieu"]))
            getAllLieuMariage();
        else
            getLieuMariage($_GET["id_lieu"]);
        break;
    case 'POST':
        if(isset($POST["id_lieu"])){
            confirmerLieuMariage();
        }else{
            http_response_code(204); 
            $msg = array("message"=> "Pas d'id"); 
            echo json_encode($msg);
        }
        
    break;
}

function getAllLieuMariage(){
    require_once("connexion.php");
    $requete ="SELECT * from lieu_mariage ";
    $statement = $connexion->query($requete);
    $resultat = $statement->fetchAll(PDO::FETCH_ASSOC);
    header('Content-type:application/json') ;
    header('Content-type:application/json') ;
    if($resultat==null)
        {
            http_response_code(204);
            $msg = array("erreur"=> "pas de lieux de mariage");
            json_encode($msg);
        }
        else
        { 
            $json = json_encode($resultat);
            echo $json;
        }
}

function getLieuMariage($id_lieu){
    $requete ="SELECT * from lieu_mariage where id_lieu = $id_lieu ";
    //Etape 2 : connexion avec la base de données, création de l'objet connexion
    require_once("connexion.php");
    //Etape 3: exécuter la requête
    $statement = $connexion->query($requete);
    //Etape 4 : récupérer le résultat sous forme associative
    $resultat = $statement->fetch(PDO::FETCH_ASSOC);
    //ajouter l'entête pour spécifier le format retourné par le fichier
    header('Content-type:application/json') ;
    //si pas de produits
    if($resultat==null)
    {
        http_response_code(204);
        $msg = array("erreur"=> "Fleuriste inexistant");
        json_encode($msg);
    }
    else
    { //Etape 5 : convertir les données en json
        $json = json_encode($resultat);
        //afficher les données json
        echo $json;
    }
}




?>
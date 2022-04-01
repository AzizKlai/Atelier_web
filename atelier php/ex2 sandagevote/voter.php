<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Evaluation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>
<body style="">
<?php
        if(isset($_POST['nom']) && !isset($_COOKIE[$_POST['nom']])){
            setcookie($_POST['nom'],$_POST['choix'],time()+60*2,'/');
        ?>
        <div class="alert alert-success" role="alert">
        Votre vote a été bien enregistré !
</div>
            
        <?php
        }else if(isset($_POST['nom']) && isset($_COOKIE[$_POST['nom']])){
        ?>        
            <div class="alert alert-danger" role="alert">
                Desole <b> "<?=$_POST['nom'] ?>" </b>Vous avez déjà voté pour: "<?=$_COOKIE[$_POST['nom']] ?>" !</div>
        <?php
        }
    ?>

<form class="" action="/atelier%20js/exercic/sandagevote/voter.php" method="post" enctype="multipart/form-data">
<div class="mb-3">
    <label class="form-label">Que pensez vous du cous PHP proposé ?</label>
    <input type="name" class="form-control" name="nom" placeholder="votre nom" required>
    <div id="emailHelp" class="form-text">champ obligatoire, vous avez <b> 2 min pour voter</b></div>
  </div>
<div style="margin: 0% auto"><div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="choix"value="Bon" checked>
  <label class="form-check-label" >Bon</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="choix"value="Moyen">
  <label class="form-check-label">Moyen</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="choix"value="Mauvais">
  <label class="form-check-label"> Mauvais</label>
</div></div>
<div class="">
                    <button type="submit" class="btn btn-primary">voter</button>
                    
                </div>
</form>    

</body>
</html>
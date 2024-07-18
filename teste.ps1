Write-Host "Insira uma mensagem de commit: y/N:"
$mensagemCommit = Read-Host
Write-Host $mensagemCommit

if ($mensagemCommit -eq "test2"){
    Write-Host "Y/N"
}
elseif ($mensagemCommit -eq "test"){
    Write-Host "No"
}else{
    Write-Host "No"
}


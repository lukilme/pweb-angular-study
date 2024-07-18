# Definir variáveis
$diretorioAtual = Get-Location
$mensagemCommit = ""

git add -A

Write-Host "Insira uma mensagem de commit:"
$mensagemCommit = Read-Host

# Executar commit com a mensagem fornecida
git commit -m $mensagemCommit

# Mostrar mensagem de sucesso
Write-Host "Commit realizado com sucesso!"
Write-Host "Insira uma mensagem de commit: Y/n:"
$mensagemCommit = Read-Host
Write-Host $mensagemCommit

if ($mensagemCommit -eq "test2"){
  git push
}
elseif ($mensagemCommit -eq "test"){
  git reset --soft HEAD^
}else{
  git push
}



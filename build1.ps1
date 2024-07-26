# Definir variáveis
$diretorioAtual = Get-Location
Write-Host "Diretorio atual: $diretorioAtual"


git add -A


$mensagemCommit = Read-Host -Prompt "Insira uma mensagem de commit"


try {
    git commit -m $mensagemCommit
    Write-Host "Commit realizado com sucesso!"
} catch {
    Write-Host "Erro ao realizar o commit. Verifique os arquivos e tente novamente."
    exit
}


$resposta = Read-Host -Prompt "Deseja enviar o commit? (y/n)"

if ($resposta -eq "y") {
    try {
        git push
        Write-Host "Commit enviado com sucesso!"
    } catch {
        Write-Host "Erro ao enviar o commit. Verifique sua conexão e tente novamente."
        exit
    }

    ng build --output-path docs --base-href /pweb-angular-study/
    $sourceFolder = "C:\Users\Desktop\Desktop\lukilme\college\pweb-angular\docs\browser"
    $destinationFolder = "C:\Users\Desktop\Desktop\lukilme\college\pweb-angular\docs"

    if (!(Test-Path $sourceFolder)) {
        Write-Host "A pasta de origem '$sourceFolder' não existe."
        exit
    }
    
    if (!(Test-Path $destinationFolder)) {
        New-Item -ItemType Directory -Path $destinationFolder
    }

    
    try {
        Copy-Item -Path $sourceFolder\* -Destination $destinationFolder -Force
        Write-Host "Arquivos copiados com sucesso de '$sourceFolder' para '$destinationFolder'."
    } catch {
        Write-Host "Erro ao copiar arquivos. Verifique os caminhos e permissões."
        exit
    }
    
 
    try {
        Remove-Item -Path $sourceFolder -Recurse
        Write-Host "Pasta de origem removida com sucesso."
    } catch {
        Write-Host "Erro ao remover a pasta de origem. Verifique os caminhos e permissões."
        exit
    }

    

} elseif ($resposta -eq "n") {
    git reset --soft HEAD^
    Write-Host "Commit desfeito."
} else {
    Write-Host "Resposta inválida. Nenhuma ação foi tomada."
}

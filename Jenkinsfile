pipeline{
    agent any{
        stages{
            stage('install'){
                steps{
                    bat 'npm install'
                }
            }
            stage('build'){
                steps{
                    bat 'npm run build'
                }
            }
        }
    }
}
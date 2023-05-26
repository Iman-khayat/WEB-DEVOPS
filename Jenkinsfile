pipeline {
        agent {
        docker { image 'node:18.16.0-alpine' }
    }
    stages {
        stage('Clone') {
            steps {
               git branch: 'main', url: 'https://github.com/Iman-khayat/WEB-DEVOPS.git'
            }
        }
      stage('Initialize'){
              steps {
        def dockerHome = tool 'docker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    } 
      }
        stage('Excute') {
            steps {
                sh'''
                docker run --name mycontainer -d -i -t 6f44d13dd2586511d630d7708da1eaac09c05693d9e3e06f3f72206927d3201d :${BUILD_NUMBER}
                curl localhost:3000
                '''
                }
        }
        stage('Package'){
            steps{
            sh'''
            docker push webdevops/nodeimage :${BUILD_NUMBER}
            '''
            }
    }
        stage('Deploy'){
            steps{
                sh'''
                echo "task is completed"
                '''
            }
        }
}
        }

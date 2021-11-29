function select01(){
    document.getElementById('btn01').classList.add('is-active');
    document.getElementById('txt01').classList.add('is-active');
    document.getElementById('btn02').classList.remove('is-active');
    document.getElementById('txt02').classList.remove('is-active');
    document.getElementById('btn03').classList.remove('is-active');
    document.getElementById('txt03').classList.remove('is-active');
};

function select02(){
    document.getElementById('btn02').classList.add('is-active');
    document.getElementById('txt02').classList.add('is-active');
    document.getElementById('btn01').classList.remove('is-active');
    document.getElementById('txt01').classList.remove('is-active');
    document.getElementById('btn03').classList.remove('is-active');
    document.getElementById('txt03').classList.remove('is-active');
};

function select03(){
    document.getElementById('btn03').classList.add('is-active');
    document.getElementById('txt03').classList.add('is-active');
    document.getElementById('btn02').classList.remove('is-active');
    document.getElementById('txt02').classList.remove('is-active');
    document.getElementById('btn01').classList.remove('is-active');
    document.getElementById('txt01').classList.remove('is-active');
};

document.getElementById('btn01').addEventListener('click',function(){
    select01();
});

document.getElementById('btn02').addEventListener('click',function(){
    select02();
}); 

document.getElementById('btn03').addEventListener('click',function(){
    select03();
}); 
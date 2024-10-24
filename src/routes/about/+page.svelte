<script>
    import Listening from "$lib/components/Listening.svelte";
    import Button from "$lib/components/Button.svelte";
    import profile from '$lib/assets/profile.jpg'
</script>


<div class='text'>

    <img src={profile} alt='profile'>

<p>
   I currently work at the <a href="https://canurb.org/">Canadian Urban Institute</a> as a Research Analyst. I studied Human Geography, Computer Science and GIS at the University of Toronto.
</p>
<p>
    Previously, I interned at <a href="https://thebentway.ca/">The Bentway</a> and <a href="https://www.sodatone.com/">Sodatone (Warner Music Group)</a>.
</p>
<p>
    I'm interested in urban environments, music, fashion, and soccer, particularly in how they interact with technology and digital culture. 
</p>
<p>
    Please reach out to me via email if you're interested in chatting about any of my projects, past experience or to enquire about freelance work. 
</p>


<Button url={'mailto:ananmay01@gmail.com'} buttonText={'Email'} />


</div>


<div class='media-container'>
<Listening/>
</div>


<style>
    img {
        width: 300px;
        height: 100%;
    }
</style>







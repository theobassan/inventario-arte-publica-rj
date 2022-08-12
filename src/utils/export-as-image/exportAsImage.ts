import html2canvas from 'html2canvas';

const exportAsImage = async (element: HTMLDivElement, imageFileName: string): Promise<void> => {
    const html = document.getElementsByTagName('html')[0];
    const body = document.getElementsByTagName('body')[0];
    let htmlWidth = html.clientWidth;
    let bodyWidth = body.clientWidth;

    const newWidth = element.scrollWidth - element.clientWidth;

    if (newWidth > element.clientWidth) {
        htmlWidth += newWidth;
        bodyWidth += newWidth;
    }

    html.style.width = htmlWidth + 'px';
    body.style.width = bodyWidth + 'px';

    const canvas = await html2canvas(element, {
        useCORS: true,
    });
    const image = canvas.toDataURL('image/png', 1.0);
    downloadImage(image, imageFileName);
    html.style.width = '';
    body.style.width = '';
};

const downloadImage = (blob: string, fileName: string): void => {
    const fakeLink = window.document.createElement('a');
    fakeLink.style.cssText = 'display:none;';
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
};

export default exportAsImage;
